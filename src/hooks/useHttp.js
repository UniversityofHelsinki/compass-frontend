import { createContext, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const baseUrl = process.env.REACT_APP_COMPASS_BACKEND_SERVER;
const cache = (() => {
  const content = {};
  const tags = {};

  const get = (tag) => {
    const hit = content[tag];
    if (hit && hit.invalidated) {
      return null;
    }
    return hit;
  };

  const set = (tag, value) => {
    if (tag) {
      content[tag] = {
        response: value,
        invalidated: false
      };
    }
  };

  const has = (tag) => {
    return Object.hasOwn(content, tag) 
      && !content[tag].invalidated;
  };

  const remove = (key) => {
    delete content[key];
  };

  const invalidate = (tag) => {
    if (content[tag]) {
      content[tag].invalidated = true;
    }
  };

  return { get, set, has, remove, invalidate };
})();

const client = async (
  path,
  tag,
  options = {}
) => {

  if (!cache.has(tag)) {
    cache.set(tag, fetch(`${baseUrl}${path}`, options));
  }

  const response = (await cache.get(tag).response).clone();
  if (!response.ok) {
    cache.remove(tag);
  }

  const hasBody = response.headers.get('Content-Length');
  if (!response.ok) {
    throw new Error(
      `Unexpected status code ${response.status} from ${path}`, 
      {
        cause: {
          ok: response.ok,
          status: response.status
        }
      }
    );
  }

  return {
    ok: response.ok,
    status: response.status,
    body: hasBody ? await response.json() : null
  };
};

export const useGET = ({ path, tag }) => {
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  const get = async () => {
    try {
      const response = await client(path, tag);
      setValue(response.body);
      setError(null);
    } catch (error) {
      console.error(error.message);
      setError(error.cause || {});
      setValue(null);
    }
  };

  useEffect(() => {
    get();
  }, []);

  if (cache.has(tag) && cache.get(tag).invalidated) {
    get();
  }

  const reload = get;
  return [value, error, reload];
};

export const usePOST = ({ path, invalidates = [] }) => {
  const post = async (body) => {
    try {
      const response = await fetch(`${baseUrl}${path}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        invalidates.forEach(tag => {
          cache.invalidate(tag);
        });
      }
      return response;
    } catch (error) {
      console.error(error.message);
      return error;
    }
  };

  return post;
};

