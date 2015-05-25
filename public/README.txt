Project plan
'Soft Food' -- a web site for people on soft food diets (for whatever reason) that provides recipes and general soft food cooking information

Sitemap
Home page - What the site is about, who it's for, how to use it.
The Soft Food Kitchen - Kitchen equipment specific to soft food preparation.
Recipe index - Index of recipes (not sure of best organization). Links to individual recipe pages.
Recipe detail page(s) - Includes ability to save recipe to recipe file.
Recipe file - List of saved recipes.

Technologies used
Templating - Maximize use of handlebars.js 
JSON - Data source for recipe list page and recipe pages
HTML5 local storage - Store & retrieve array of saved recipes 
Media queries (not part of this quarter, but we only spent 1/2 class on it last quarter and as it's the soul of responsive design I'd like to learn it better)

So far
- Built common template used by all pages. All content loaded through js from handlebars templates/partials. 
- Incorporated autobars-js, jquery plugin for loading handlebars templates from external files. Split js into global + per page. Split templates into individual (per page) hbs files.
- 2/5 pages on template; placeholder .html files for others

To do
Create basic templates & placeholder content for remaining pages (recipe index, recipe detail, recipe file)
CSS for basic desktop layout
Create catalog JSON
Recipe index page: Read catalog JSON to build list of link
Recipe detail page: Read catalog JSON to display recipe details
Recipe index/detail integration: Modify detail page to take ID, wire recipe links to pass recipe ID
Store recipes: Button from recipe detail page adds ID to local storage array
Recipe file page: Read IDs from local storage, build list of links
Responsive behavior: media queries for smaller displays



