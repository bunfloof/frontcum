## Notes for front

### Websockets

- Used to ping server locations unless APIs die 😂

### Webserver configuration
When uploaded to webserver, remember to configure to serve the `.html` file when a URL without the .html extension is requested. Examples:

LiteSpeed Apache Websever on CloudLinux cPanel with PHP WHMCS under /billing (Production 🤑):
```
# Custom rules for Next.js app
<IfModule mod_rewrite.c>
  RewriteEngine On

  # Ignore the rules for specific directories like /billing or other folders
  RewriteCond %{REQUEST_URI} !^/billing
  # Add other directories to ignore as needed
  # RewriteCond %{REQUEST_URI} !^/other-directory

  # If the requested filename does not exist, add .html
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME}.html -f
  RewriteRule ^(.*)$ $1.html [L]
</IfModule>
```

NGINX Webserver:
```
server {
    listen 80;

    location / {
        root /home/bun/path/to/next/app; # Modify this with your actual Next.js build directory path.
        try_files $uri $uri/ $uri.html;
    }
}

```

Caddy Webserver (Failover 1):
```
:80

root * /home/bun/path/to/next/app; # Modify this with your actual Next.js build directory path.
file_server
try_files {path} {path}/ {path}.html
```

LiteSpeed Apache Webserver (Failover 2):
```
<Directory "/path/to/your/next/app">  # Modify this with your actual Next.js build directory path.
    Options Indexes FollowSymLinks

    RewriteEngine On

    # If the requested filename exists, serve file
    RewriteCond %{REQUEST_FILENAME} -f [OR]
    RewriteCond %{REQUEST_FILENAME} -d
    RewriteRule ^ - [L]

    # If the requested filename does not exist, add .html
    RewriteCond %{REQUEST_FILENAME}.html -f
    RewriteRule ^ %{REQUEST_URI}.html [L]

</Directory>

```

### Serving pages instantly
Router change the URL and render the new page without refreshing the whole page. NextJS pre-fetches linked page when the link comes into the viewport. Next.js does this automatically for Link components. It will pre-fetch the page and keep it in memory, so when you click on the link, the page can be swapped instantly. **Make sure you're using Next.js's Link component for navigation.**






## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
