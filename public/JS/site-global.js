
/*****************************************************************************************************
Makes heavy use of jquery-autobars, jquery plugin for loading handlebars templates from external files
            https://github.com/cultofmetatron/jquery-autobars
                    No license information found
******************************************************************************************************/

function loadGlobal(pageName){
    
        var callback_function = function() {
        
        /************** Global nav ********************************************/
        var navContext = {
            items:[
            {linkName:"Home", itemClass:"",linkURL:"index.html"},
            {linkName:"Soft food kitchen",itemClass:"",linkURL:"kitchen.html"},
            {linkName:"Recipes",itemClass:"",linkURL:"recipes.html"},
            {linkName:"My recipe file",itemClass:"",linkURL:"recipe_file.html"}
            ]
        }
          
        var $html = $.handlebarTemplates['pageNav'](navContext);
        $('#nav-placeholder').html($html);

            
        /*********** Footer ***************************************************/    
        var $html = $.handlebarTemplates['footer']({
            message: "Footer"
        });
        $("#footer-placeholder").append($html);
            
      }; // end of loaGlobal function 

      var template_list = [
        'templates/global/pageNav.hbs',
        'templates/global/footer.hbs'
      ]

/*
      var partial_list = [
        'templates/home-partials.hbs'
      ]
*/

      $(document).autoBars({
        callback: callback_function,
        main_template_from_list: template_list,
       // partial_template_from_list: partial_list
      });
    }