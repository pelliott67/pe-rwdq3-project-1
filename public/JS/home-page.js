
/*****************************************************************************************************
Makes heavy use of jquery-autobars, jquery plugin for loading handlebars templates from external files
            https://github.com/cultofmetatron/jquery-autobars
                    No license information found
******************************************************************************************************/

function loadPage(pageName){
    
        var callback_function = function() {
        

        var $html = $.handlebarTemplates['home-body']({
            message: pageName
        });
        $("#page-body-placeholder").html($html);

        var $html = $.handlebarTemplates['home-body2']({
            message: "Another section"
        });
        $("#page-section-placholder").html($html);

      };

      var template_list = [
        'templates/home/home-body.hbs',
        'templates/home/home-body2.hbs',
      ]

      var partial_list = [
        'templates/home/home-partials.hbs'
      ]

      $(document).autoBars({
        callback: callback_function,
        main_template_from_list: template_list,
        partial_template_from_list: partial_list
      });
    }