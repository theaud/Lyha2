/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  Jouer */
    
    
        /* button  Credit */
    $(document).on("click", ".uib_w_4", function(evt)
    {
         /*global activate_page */
         activate_page("#Credit"); 
    });
    
        /* button  Option */
    $(document).on("click", ".uib_w_5", function(evt)
    {
         /*global activate_page */
         activate_page("#Option"); 
    });
    
        /* button  .uib_w_8 */
    $(document).on("click", ".uib_w_8", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
    });
    
        /* button  Chapitre 1 */
    $(document).on("click", ".uib_w_11", function(evt)
    {
         /*global activate_page */
         activate_page("#Story"); 
    });
    
        /* button  Chapitre 2 */
    $(document).on("click", ".uib_w_12", function(evt)
    {
         /*global activate_page */
         activate_page("#Story"); 
    });
    
        /* button  Chapitre 3 */
    $(document).on("click", ".uib_w_13", function(evt)
    {
         /*global activate_page */
         activate_page("#Story"); 
    });
    
        /* button  Chapitre 4 */
    $(document).on("click", ".uib_w_14", function(evt)
    {
         /*global activate_page */
         activate_page("#Story"); 
    });
    
        /* button  Chapitre 5 */
    $(document).on("click", ".uib_w_15", function(evt)
    {
         /*global activate_page */
         activate_page("#Story"); 
    });
    
        /* button  .uib_w_18 */
    $(document).on("click", ".uib_w_18", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#sidebar1"));  
    });
    
        /* button  Chapitre 1 */
    $(document).on("click", ".uib_w_31", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#Chapitre1"); 
    });
    
        /* button  Chapitre 2 */
    $(document).on("click", ".uib_w_32", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#Chapitre2"); 
    });
    
        /* button  Chapitre 3 */
    $(document).on("click", ".uib_w_33", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#Chapitre3"); 
    });
    
        /* button  Chapitre 4 */
    $(document).on("click", ".uib_w_34", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#Chapitre4"); 
    });
    
        /* button  Chapitre 5 */
    $(document).on("click", ".uib_w_35", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#Chapitre5"); 
    });
    
        /* button  Jouer */
    $(document).on("click", ".uib_w_3", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#Chapitre1"); 
    });
    
        /* button  .uib_w_51 */
    $(document).on("click", ".uib_w_51", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
    });
    
        /* button  .uib_w_53 */
    $(document).on("click", ".uib_w_53", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#Chapitre1"); 
    });
    
        /* button  A */
        $(document).on("click", ".uib_w_60", function(evt)
    {
        /* Modals are created using custom js 
         For examples and documentation visit http://www.idangero.us/framework7/docs/modal.html */
        myApp.modal({
          title: 'A',
          text: 'Blabla BlablaBlablaBlabla reponse A',
          buttons: [
            {
              text: 'Close',
              close: true
            },
            {
              text: 'Valider',
              close: true
            }
          ]
        }) 
    });
    
        /* button  B */
    $(document).on("click", ".uib_w_61", function(evt)
    {
        /* Modals are created using custom js 
         For examples and documentation visit http://www.idangero.us/framework7/docs/modal.html */
        myApp.modal({
          title: 'B',
          text: 'Blabla BlablaBlablaBlabla reponse B',
          buttons: [
            {
              text: 'Close',
              close: true
            },
            {
              text: 'Valider',
              close: true
            }
          ]
        }) 
    });
    
        /* button  C */
    $(document).on("click", ".uib_w_62", function(evt)
    {
        /* Modals are created using custom js 
         For examples and documentation visit http://www.idangero.us/framework7/docs/modal.html */
        myApp.modal({
          title: 'C',
          text: 'Blabla BlablaBlablaBlabla reponse C',
          buttons: [
            {
              text: 'Close',
              close: true
            },
            {
              text: 'Valider',
              close: true
            }
          ]
        }) 
    });
    
  
    
        /* button  Egnime 1.1 */
    
    
        /* button  .uib_w_53 */
    $(document).on("click", ".uib_w_53", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#Chapitre1"); 
    });
    

    
        /* button  A */
    
        $(document).on("click", ".uib_w_67", function(evt)
    {
        /* Modals are created using custom js 
         For examples and documentation visit http://www.idangero.us/framework7/docs/modal.html */
        myApp.modal({
          title: 'Modal Title',
          text: 'uib_w_67',
          buttons: [
            {
              text: 'Close',
              close: true
            }
          ]
        }) 
    });
        /* button  B */
    $(document).on("click", ".uib_w_68", function(evt)
    {
        /* Modals are created using custom js 
         For examples and documentation visit http://www.idangero.us/framework7/docs/modal.html */
        myApp.modal({
          title: 'Modal Title',
          text: 'uib_w_68',
          buttons: [
            {
              text: 'Close',
              close: true
            }
          ]
        }) 
    });
    
        /* button  C */
    $(document).on("click", ".uib_w_69", function(evt)
    {
        /* Modals are created using custom js 
         For examples and documentation visit http://www.idangero.us/framework7/docs/modal.html */
        myApp.modal({
          title: 'Modal Title',
          text: 'uib_w_69',
          buttons: [
            {
              text: 'Close',
              close: true
            }
          ]
        }) 
    });
    
        /* button  Enigme 1.2 */
    
    
   

    
        /* button  Enigme 1.3 */
    $(document).on("click", ".uib_w_23", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#Image_Texte"); 
    });
    
        /* button  Enigme 1.4 */
    $(document).on("click", ".uib_w_37", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#Texte_Texte"); 
    });
    
        /* button  Enigme 1.1 */
    $(document).on("click", ".uib_w_21", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#Texte_mod"); 
    });
    
        /* button  Enigme 1.2 */
    $(document).on("click", ".uib_w_22", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#Image_mod"); 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();