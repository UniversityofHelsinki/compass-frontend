# Use the official Nginx image from the Docker Hub
FROM nginx:alpine

# Set the working directory
WORKDIR /app

# Copy the build files into the working directory
COPY build ./

# Update the package list and install dependencies
RUN apk update \
    && apk add --no-cache tzdata

# Copy project files to the appropriate directory
RUN cp -r . /usr/share/nginx/html

# Remove the default Nginx configuration file
RUN rm -rf /etc/nginx/conf.d/default.conf

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d

# Create a non-root user and group
RUN addgroup -S nginxgroup && adduser -S nginxuser -G nginxgroup

# Change the ownership of the Nginx directory to the non-root user
RUN chown -R nginxuser:nginxgroup /usr/share/nginx/html

# Switch to the non-root user
USER nginxuser

# Expose port 3000
EXPOSE 3000

# Define the command to run when the container starts
CMD ["nginx", "-g", "daemon off;"]
