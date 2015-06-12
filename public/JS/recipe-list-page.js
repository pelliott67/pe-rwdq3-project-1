
/***************************** RECIPE-LIST-PAGE JS ***********************************
Makes heavy use of jquery-autobars, https://github.com/cultofmetatron/jquery-autobars
            https://github.com/cultofmetatron/jquery-autobars
                    No license information found
**************************************************************************************/
//var recipes = "";

function loadPage(pageName){

        var callback_function = function() {
            
        //alert("Hi");
        
        var $html = $.handlebarTemplates['recipe-list']({
            message: pageName
        });
        $("#page-body-placeholder").html($html);
        
// If I create 'recipes' like this and pass it to the template it works:       
      var recipes =  { 
            recipe: [
            { 
             "id": "1001", 
             "name": "First recipe", 
             "ingredients": "1T brandy" 
             },
            { 
             "id": "1002", 
             "name": "Second recipe", 
             "ingredients": " 1lb black truffles" 
             } 
            ]
        };
            
            
        //I can't figure out how to create the same 'recipes' object by loading/parsing the js file 
/*        $.getJSON("Data\Recipes.json", function(data) {
            if(1==1) {
                alert("read it");
            } else {
                alert("didn't read it");
                      }
            
            //var recipes = $.parseJSON(data);
        });*/
            
    
       var $html = $.handlebarTemplates['recipe-list2'](
            recipes
        );
        $("#page-section-placholder").html($html);
        
      }; // end of callback_function
    
      var template_list = [
        'templates/recipe-list/recipe-list.hbs',
       'templates/recipe-list/recipe-list2.hbs'
      ]

/*      var partial_list = [
        'templates/home-partials.hbs'
      ]*/

      $(document).autoBars({
        callback: callback_function,
        main_template_from_list: template_list,
        //partial_template_from_list: partial_list
      });
    
    }