
/***************************** RECIPE-DETAIL-PAGE JS *********************************/

function loadPage(pageName){
    
        var callback_function = function() {
        

        var $html = $.handlebarTemplates['recipe-detail']({
            message: pageName
        });
        $("#page-body-placeholder").html($html);

        var $html = $.handlebarTemplates['recipe-detail2']({
            message: "Another section"
        });
        $("#page-section-placholder").html($html);

      };

      var template_list = [
        'templates/recipe-detail/recipe-detail.hbs',
        'templates/recipe-detail/recipe-detail2.hbs',
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