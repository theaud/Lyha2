/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 { var currentEnigme=1;
     
/* button  .uib_w_8 */      $(document).on("click", ".uib_w_8", function(evt)     {         /*global activate_page */         activate_page("#mainpage");       });
/* button  Chapitre 1 */    $(document).on("click", ".uib_w_11", function(evt)    {         /*global activate_page */         activate_page("#Story");          });
/* button  Chapitre 2 */    $(document).on("click", ".uib_w_12", function(evt)    {         /*global activate_page */         activate_page("#Story");          });
/* button  Chapitre 3 */    $(document).on("click", ".uib_w_13", function(evt)    {         /*global activate_page */         activate_page("#Story");          });
/* button  Chapitre 4 */    $(document).on("click", ".uib_w_14", function(evt)    {         /*global activate_page */         activate_page("#Story");          });
/* button  Chapitre 5 */    $(document).on("click", ".uib_w_15", function(evt)    {         /*global activate_page */         activate_page("#Story");          });
/* button  Chapitre 1 */    $(document).on("click", ".uib_w_31", function(evt)    {         /*global activate_subpage */      activate_subpage("#Chapitre1");   });
/* button  Chapitre 2 */    $(document).on("click", ".uib_w_32", function(evt)    {         /*global activate_subpage */      activate_subpage("#Chapitre2");   });
/* button  Chapitre 3 */    $(document).on("click", ".uib_w_33", function(evt)    {         /*global activate_subpage */      activate_subpage("#Chapitre3");   });
/* button  Chapitre 4 */    $(document).on("click", ".uib_w_34", function(evt)    {         /*global activate_subpage */      activate_subpage("#Chapitre4");   });
/* button  Chapitre 5 */    $(document).on("click", ".uib_w_35", function(evt)    {         /*global activate_subpage */      activate_subpage("#Chapitre5");   });
/* button  Jouer */         $(document).on("click", ".uib_w_3", function(evt)     {         /*global activate_subpage */      activate_subpage("#Chapitre1");   });
/* button  .uib_w_51 */     $(document).on("click", ".uib_w_51", function(evt)    {         /*global activate_page */         activate_page("#mainpage");       });
/* button  .uib_w_53 */     $(document).on("click", ".uib_w_53", function(evt)    {         /*global activate_subpage */      activate_subpage("#Chapitre1");   });
/* button  .uib_w_87 */     $(document).on("click", ".uib_w_87", function(evt)    {         /*global activate_page */         activate_page("#mainpage");       });
/* button  .uib_w_89 */     $(document).on("click", ".uib_w_89", function(evt)    {         /*global activate_page */         activate_page("#mainpage");       }); 
/* button  Option */        $(document).on("click", ".uib_w_4", function(evt)     {         /*global activate_page */         activate_page("#Option");         }); 
/* button  Credit */        $(document).on("click", ".uib_w_5", function(evt)     {         /*global activate_page */         activate_page("#Credit");         });
/* button  .uib_w_112 */    $(document).on("click", ".uib_w_112", function(evt)   {         /*global activate_page */         activate_page("#Story");          });
/* button  #Dialogue */     
/* button  .uib_w_111 */    $(document).on("click", ".uib_w_111", function(evt)   {         /*global activate_page */         activate_page("#mainpage");       });
/* button  .uib_w_53 */     $(document).on("click", ".uib_w_53", function(evt)    {         /*global activate_subpage */      activate_subpage("#Chapitre1");   });
/* button  .uib_w_114 */    $(document).on("click", ".uib_w_114", function(evt)   {                                           uib_sb.toggle_sidebar($("#sidebar1")); });
/* button  .uib_w_116 */    $(document).on("click", ".uib_w_116", function(evt)   {                                           activate_subpage("#Chapitre1");     });
/* button  #returnMain */   $(document).on("click", "#returnMain", function(evt)  {         /*global activate_page */         activate_page("#mainpage");       });
/* button  #returnMain1 */  $(document).on("click", "#returnMain1", function(evt) {         /*global activate_page */         activate_page("#mainpage");       });
/* button  .uib_w_113 */    $(document).on("click", ".uib_w_113", function(evt)   {         /*global activate_page */         activate_page("#mainpage");       });
/* button  Button */        $(document).on("click", ".uib_w_130", function(evt)   {         /*global activate_page */         activate_page("#mainpage");       });

/* button  Enigme 1.0 */ $(document).on("click", ".uib_w_149", function(evt)    {chargerPaterne(0) });
/* button  Enigme 1.1 */ $(document).on("click", ".uib_w_21", function(evt)     {chargerPaterne(1) });
/* button  Enigme 1.2 */ $(document).on("click", ".uib_w_22", function(evt)     {chargerPaterne(2) });
/* button  Enigme 1.3 */ $(document).on("click", ".uib_w_23", function(evt)     {chargerPaterne(3) });
/* button  Enigme 1.4 */ $(document).on("click", ".uib_w_37", function(evt)     {chargerPaterne(4) });
/* button  Enigme 1.5 */ $(document).on("click", ".uib_w_143", function(evt)    {chargerPaterne(5) });
/* button  Enigme 1.6 */ $(document).on("click", ".uib_w_144", function(evt)    {chargerPaterne(6) });
/* button  Enigme 1.7 */ $(document).on("click", ".uib_w_145", function(evt)    {chargerPaterne(7) });
/* button  Enigme 1.8 */ $(document).on("click", ".uib_w_146", function(evt)    {chargerPaterne(8) });
/* button  Enigme 1.9 */ $(document).on("click", ".uib_w_147", function(evt)    {chargerPaterne(9) });
/* button  Enigme 1.10 */$(document).on("click", ".uib_w_148", function(evt)    {chargerPaterne(10) });
  
  
  
  
  /* button  .uib_w_18 */     $(document).on("click", ".uib_w_18", function(evt)    {         /*global uib_sb */         /* Other possible functions are: uib_sb.open_sidebar($sb)           uib_sb.close_sidebar($sb)           uib_sb.toggle_sidebar($sb)            uib_sb.close_all_sidebars()          See js/sidebar.js for the full sidebar API */
 uib_sb.toggle_sidebar($("#sidebar1"));  });
  
  
        /* button  A */
  $(document).on("click", ".uib_w_60", function(evt)
    {  myApp.modal({
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
    { myApp.modal({
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
    {   myApp.modal({
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
    
        /* button  A */
    
        $(document).on("click", ".uib_w_67", function(evt)
    {   myApp.modal({
          title: 'Modal Title',
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
    $(document).on("click", ".uib_w_68", function(evt)
    { myApp.modal({
          title: 'Modal Title',
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
    $(document).on("click", ".uib_w_69", function(evt)
    {   myApp.modal({
          title: 'Modal Title',
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
    
  
  
        /* button  #Validation_texte_texte */
    $(document).on("click", "#Validation_texte_texte", function(evt)
    {
       //§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§      validation a faire ici §§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§
        
        
        var texte=document.getElementById("Entrer_Texte_Texte").value ;
        document.getElementById("Entrer_Texte_Texte").value="" ;
  
        
        
       // if(texte==getReponse(NBenigme).toLowerCase())
          if(texte.toLowerCase()==getReponse(currentEnigme).toLowerCase()||texte.toLowerCase()=="cheat") 
            {   
                 currentEnigme++;
            
                charger_Texte_Texte(currentEnigme)
                activate_subpage("#Texte_Texte"); 
             
                // document.getElementById("Enoncer_Texte_Texte").innerHTML=getEnoncer(NBenigme);
                
                
               //ajout choix paterne
                
            }
        else
            {
                document.getElementById("Enoncer_Texte_Texte").innerHTML+=" Erreur" ;
            }
        
    });
    
 
    
    

       
     /* button  swich image */    $(document).on("click", ".uib_w_131", function(evt)
    {
       //§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§
        
        var x = document.getElementById("src_image_mod");
  
        x.setAttribute("src", "images/Arrow.png");
        
    });
    
 
    
    
        /* button  correct */
    $(document).on("click", ".uib_w_135", function(evt)
    {
        /* Modals are created using custom js 
         For examples and documentation visit http://www.idangero.us/framework7/docs/modal.html */
        myApp.modal({
          title: 'Correct',
          text: 'Vous avez trouvé la bonne reponse (a coder)',
          buttons: [ {
              text: 'enigme suivante',
              close: true,
              
              
            }
          ]
        }) 
    });
    
        /* button  Erreur */
    $(document).on("click", ".uib_w_136", function(evt)
    {
        /* Modals are created using custom js 
         For examples and documentation visit http://www.idangero.us/framework7/docs/modal.html */
        myApp.modal({
          title: 'erreur',
          text: 'Vous n\'avez pas trouvé la bonne reponse',
          buttons: [
            {
              text: 'Close',
              close: true
            }
          ]
        }) 
    });
     
    
        /* button  F1 */
    $(document).on("click", ".uib_w_138", function(evt)//------------------------------------------------Changement de paterne -------------------------------------------------------------------
    {//destination image + ABC
        
        
         /*global activate_subpage */
         activate_subpage("#Image_mod"); 
        
        var x = document.getElementById("src_image_mod");
        x.setAttribute("src", "images/Arrow.png");
          
        
    });
    
        /* button  F2 */
    $(document).on("click", ".uib_w_139", function(evt)//------------------------------------------------Changement de paterne -------------------------------------------------------------------
    {//F2 image + saisie texte
         /*global activate_subpage */
         activate_subpage("#Image_Texte"); 
               var x = document.getElementById("src_Image_Texte");
        x.setAttribute("src", "images/Arrow.png");
          
    });
    
        /* button  F3 */
    $(document).on("click", ".uib_w_140", function(evt)//------------------------------------------------Changement de paterne -------------------------------------------------------------------
   
    {//F3 texte+ saisie texte
         /*global activate_subpage */
         activate_subpage("#Texte_Texte"); //ID=Enoncer_Texte_Texte
    });
    
        /* button  F4 */
    $(document).on("click", ".uib_w_141", function(evt)//------------------------------------------------Changement de paterne -------------------------------------------------------------------
   
    {//F4 texte + ABC
         /*global activate_subpage */
         activate_subpage("#Texte_mod"); //ID=Enoncer_Texte_mod
        
        
    });
     
    
     
    
   
    

    
        /* button  #Dialogue */
    
    
        /* button  Chapitre 2.1 */
    $(document).on("click", ".uib_w_29", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#Texte_Texte"); 
    });
    
        /* button  Chapitre 4.1 */
    $(document).on("click", ".uib_w_43", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#Texte_Texte"); 
    });
    
        /* button  Chapitre 4.1 */
    $(document).on("click", ".uib_w_44", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#Texte_Texte"); 
    });
    
        /* button  Chapitre 4.1 */
    $(document).on("click", ".uib_w_45", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#Texte_Texte"); 
    });
    
        /* button  Chapitre 5.1 */
    $(document).on("click", ".uib_w_47", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#Texte_Texte"); 
    });
    
        /* button  Chapitre 5.1 */
    $(document).on("click", ".uib_w_49", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#Texte_Texte"); 
    });
    
        /* button  #Dialogue */
    $(document).on("click", "#Dialogue", function(evt)
    {
         /*global activate_page */
         activate_page("#dialog"); 
    });
    
    }
    
    
    function getEgnime(Id) {var texte="Enigme "+Id+" :<br>";
                            
                 texte+=" Reponse = "+getReponse(Id)+" <br> "           
        
        switch(Id)
            {case 0:return texte+"b8 88 ? 98";
                    
            case 1:return texte+"cf image";
                    
            case 2:return texte+"64 chiens sont inscrits pour un concours de beauté canin réservé aux chiens de races, parmi ces 64 chiens de races, 50 % arrivent en huitième de finale. Lors des de cette épreuve, 50% sont éliminés, arrivent les quarts où,face à un jury énervé par le temps pluvieux, encore 50% sont éliminés. Finalement, après des heures de délibérations,le jury décide enfin qui sera envoyé en finale. Parmi les gagnants, quel pourcentage à gagné ?";
                    
            case 3:return  texte+"Ayant réglée mon réveil analogique pour 10 heures du matin, et comptant dormir vers disons 8h du soir, dans combien d'heure sortirais-je de veille ?";  
                    
            case 4:return texte+"Combien de gouttes d'eau peut-on mettre dans un verre vide ?";  
                    
            case 5:return texte+"Qu'obtient-on si l'on mélange du Calcium, du Nickel, du Carbone et de l'Hélium ?";
                    
            case 6:return texte+"Trouvez l'errreur : 9 7 5 6 2 3 1 8 4";
                    
            case 7:return texte+"Quel nombre divisé par lui-même donne son double ?"; 
                    
            case 8:return texte+"Si développer une I.A coutait 2000 €,Le support électronique coutant 1990 € de plus que le programme,, combien coute le programme ?";
                    
            case 9:return texte+"MEDENTREN";
                    
            case 10:return texte+"Un train A part de Paris vers Bordeaux à 7h00 du matin et roule à 90 km/h. Le même jour à 8h00, un autre train B part de Bordeaux vers Paris et roule à 110 km/h. Lorsqu'ils se croiseront, lequel de ces trains sera le plus proche de Paris ?";
                    
                    
            default:return texte+"limite depasser";     
            }       
    
        
}
     function getReponse(Id) {
        switch(Id)
            {case 0:return "87";
            case 1:return "16";
            case 2:return "100";
            case 3:return "2";      
            case 4:return "1";        
            case 5:return "caniche";
            case 6:return "errreur";
            case 7:return  "0.5";        
            case 8:return "5";
            case 9:return "rendement";
            case 10:return "aucun";
             default:return "limite depasser";     
            }       
}   
    
    function charger_Texte_Texte(ID)
    {document.getElementById("Enoncer_Texte_Texte").innerHTML=getEgnime(ID) ;}
    
    function getType(Id)
    { switch(Id)
            {case 0:return 1;           case 1:return 2;            case 2:return 1;            case 3:return 1;            case 4:return 1;
            case 5:return 1;            case 6:return 1;            case 7:return 1;            case 8:return 1;            case 9:return 1;
            case 10:return 1;             
                
                default:return 1;     
            } 
        
        /*type:1 => texte texte
               2 => image texte
        */
    }
    
    function chargerPaterne(Id)
    { currentEnigme=Id;     
        switch(getType(Id))
            {   case 1:charger_Texte_Texte(currentEnigme);         activate_subpage("#Texte_Texte"); break;     
                case 2: break;    
                case 3: break;    
                case 4: break;  
                default:break;
            }     
    }
    
    
    
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
