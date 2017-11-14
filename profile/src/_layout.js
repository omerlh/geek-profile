module.exports = function ({ title, content, frontMatter }) {
  return `
    <!doctype html>
    <html>
      <head>
        <!-- <title>${title}</title> -->
        <title>${frontMatter.title}</title>
        <link rel="stylesheet" href="./css/site.css">
      </head>
      <body>
      <div class="container">
      <div class="image_container">
      <img class="image" src="images/OmerLH3.jpg" />
    </div>
        <div class="profile">
        ${content}
        </div>
        </div>
        <footer>
           Like this page? <a href="${frontMatter.github}">Fork me to create your own!</a>
        </footer>
        <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-97993844-1', 'auto');
        ga('send', 'pageview');

      </script>
      </body>
    </html>
  `;
};
