
/***************************** RECIPE-FILE-PAGE JS ***********************************
Makes heavy use of jquery-autobars, https://github.com/cultofmetatron/jquery-autobars
            https://github.com/cultofmetatron/jquery-autobars
                    No license information found
**************************************************************************************/

function loadPage(pageName){
    
        var callback_function = function() {
        

        var $html = $.handlebarTemplates['recipe-file']({
            message: pageName
        });
        $("#page-body-placeholder").html($html);

        var $html = $.handlebarTemplates['recipe-file2']({
            message: "Another section"
        });
        $("#page-section-placholder").html($html);

      };

      var template_list = [
        'templates/recipe-file/recipe-file.hbs',
        'templates/recipe-file/recipe-file2.hbs',
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