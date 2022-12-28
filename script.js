

class carte {

    constructor (idPopup,titre, info) {
        this.idPopup=idPopup
        this.titre=titre ;
        this.info=info ;
    }

    afficherDansPopup () {
   
    let popup=document.getElementById(this.idPopup)
    popup.textContent=""// ràz avant edition
    let titreh1=document.createElement("h1")
    let paragraphe=document.createElement("p")
    let texteParagraphe=document.createTextNode(this.info)
    let texteTitre=document.createTextNode(this.titre)
    titreh1.appendChild(texteTitre)
    paragraphe.appendChild(texteParagraphe)
    popup.appendChild(titreh1) 
    popup.appendChild(paragraphe)     
    console.log(popup)
    }
}

let carte2=new carte ("popup2","Le houx","Les feuilles persistantes du houx symbolisent la vie éternelle, tandis que les baies rouges représentent les gouttes du sang de Jésus sur la croix. Ses feuilles épineuses rappellent la couronne d’épines placées sur sa tête par les soldats romains qui le tourmentaient.")
let carte4=new carte ("popup4","Quelques jours avant Noël, un homme discute au bar avec un ami:"," \n\" J’ai fait couper la queue de mon chien la semaine dernière.\n– Ah bon, et pourquoi ça ?\n– Je reçois ma belle-mère à Noël et je ne veux pas qu’elle s’aperçoive que certains sont contents de la voir !","C'est un animal")
let carte3=new carte ("popup3","Deux petites filles discutent dans la cour pendant la récréation :","\"T’as demandé quoi toi pour Noël ?\n– Un Tampax.\n– C’est quoi ça ?\n– Je sais pas, mais j’ai vu à la télé qu’avec ça tu peux faire du cheval, de la gym et du vélo.")
let carte10=new carte ("popup10","M. et Mme Duciel ont cinq enfants, comment s'appellent-ils ?","Betty, Baba, Noël, Quentin, Sandra.")
let carte18=new carte ("popup18","Les cloches","On prétend que les cloches sonnaient une heure complète pour éloigner les mauvais esprits à la veille de la naissance du Christ.Traditionnellement, les cloches sonnaient pour annoncer un décès et ces cloches de Noël annonçaient la mort du diable et de tous les mauvais esprits qui sont repoussés par le bruit.")
let carte22=new carte ("popup22","Le sucre d'orge","Ce sont des religieuses bénédictines qui, en 1638, ont inventé la recette du sucre d'orge. À l'origine destiné à soulager les maux de gorge, il était composé d'orge perlé, de sucre de canne et de vinaigre.")
let carte15=new carte ("popup15","Le sapin","Dans l’empire romain, le 25 décembre était considéré comme le jour de la renaissance du soleil. À cette occasion, les Romains s’offraient des cadeaux et décoraient leurs maisons avec des branches de conifères, un arbre vert donc. Plus tard, en Europe du Nord, les Celtes associaient chaque mois lunaire à un arbre. L’épicéa fut déjà désigné pour le mois de décembre. Au Moyen-Âge, lors des mystères, ces scènes bibliques jouées sur le parvis des églises, un arbre était garni de pommes rouges, faisant référence à l’arbre du paradis… Et c’est au XIIe siècle que le sapin, tel qu’on le connaît aujourd’hui, a véritablement fait son apparition en France. Au XIVe siècle, les sapins étaient déjà parés de pommes, de confiseries, de fleurs.")
let carte1=new carte ("popup1","L'Estrelle","L'étoile de Bethléem qui guide les sages symbolise le Christ, qui est le Sauveur et l'étoile directrice de l'humanité.Les évangiles disent qu'une étoile brillante éclaira le ciel au moment de la naissance de Jésus-Christ, guidant les mages vers lui.. Certains scientifiques pensent que cette étoile était la comète de Halley. Aujourd'hui, l'arbre de Noël est couronné de l'image d'une étoile.")
let carte13=new carte ("popup13","Que dit un sapin de Noël qui arrive en retard le soir du réveillon ?"," Je vais encore me faire enguirlander.")
let carte12=new carte ("popup12","Savez-vous pourquoi le Père Noël rit tout le temps?","Parce que ce n’est pas lui qui paye les cadeaux.")
let carte9=new carte ("popup9","La couronne","a une signification païenne aussi bien que chrétienne. Au Moyen Age, les baies rouges de houx étaient considérées comme ayant le pouvoir de garder les sorcières loin des habitations et les branches de conifères comme ayant le pouvoir de chasser les mauvais esprits.La couronne est généralement lacée avec des rubans rouges qui expriment la fête et des feuilles persistantes qui représentent la vie éternelle promise à ceux qui sont fidèles à Jésus-Christ. ")
let carte24=new carte ("popup24","Les couleurs de Noël","Il y a beaucoup de couleurs associées à Noël, mais les plus répandues d’entre elles sont le rouge, le vert, le blanc et l’or.Le rouge symbolise la fête et l’excitation ainsi que le feu, le sang et la charité.Le vert symbolise la nature, la jeunesse et l’espoir de la vie éternelle.Le blanc symbolise la lumière, la pureté, la joie et la gloire.L’or symbolise la lumière du soleil et son éclat.")
let carte8=new carte ("popup8","Toto demande à sa maman :","\"Elle faisait quoi, comme métier la Sainte-Vierge ? \n- Elle était mère au foyer.\n - Alors, pourquoi elle a mis le petit Jésus à la crèche ? ")
let carte5=new carte ("popup5","La crèche","Pour cet élément on balance entre tradition populaire ou symbole religieux. La “crèche” désigne d’abord une mangeoire pour animaux. Cette étable de Bethléem est citée en illustration des scènes de la nativité chez les chrétiens: depuis l’arrivée de Marie et Joseph, jusqu’à la célébration de la naissance de Jésus, par les anges, les bergers et les rois mages. Mais l’héritage pastoral du Sud-Est de la France dément cette histoire. Les santons originaires de Provence, ont toujours existé pour témoigner des traditions régionales et des métiers traditionnels des villages provençaux: berger, curé, tambourinaire, maire… On retrouve aussi dans ces figurines le relief et les bâtiments: pont, rivière, colline… et étable!")
let carte7=new carte ("popup7","Le papa de Jérôme lui demande ce qu’il a demandé au père Noël."," Jérôme lui répond : \"Je lui ai demandé qu’il vienne plus souvent.\"")
let carte14=new carte ("popup14","Les boules","Les boules qui décorent principalement le sapin de Noël représentent les fruits des arbres. Initialement les fruits servaient de décoration et étaient mangés par les enfants. Selon la légende, lorsqu'il n'y avait pas de fruits dans une année, un artisan fabriquait des boules de verre pour les imiter.")
let carte20=new carte ("popup20","Les bougies","Pas de Noël sans cette source de chaleur et de confort qu’est la lumière (et le parfum) d’une bougie. Traditionnellement, les bougies étaient même accrochées dans le sapin, en guise de boules (au départ il y avait des pommes de pin, qui pendant les hivers rudes ont été remplacées par des boules peintes). La lumière en première symbolique évidente, est complétée par Luther qui a exprimé la grande ressemble des bougies aux étoiles dans le ciel, brillant particulièrement la nuit de Noël. Ce même Luther instaura ainsi la tradition des bougies dans le sapin, comme reflet des étoiles dans la neige.")
let carte21=new carte ("popup21","Le Père Noël","Père Noël amène des cadeaux aux enfants pendant la nuit entre le 24 et le 25 décembre. Ce personnage peut être lié à différentes figures présentes dans les cultures du monde entier, même si on l’associe en particulier à Saint Nicolas. Ce dernier fut un évêque de Myre et accomplit des miracles qui permirent de sauver des enfants. Il ne commença à être représenté en rouge avec une barbe blanche qu’à la fin du XIX siècle et au cours du siècle suivant les agences publicitaires américaines le consacrèrent à l’iconographie que nous connaissons tous.")
let carte6=new carte ("popup6","Les guirlandes","Les guirlandes remontent à l'Antiquité et sont originaires de Rome.Elles sont un symbole de bienvenue.C'est pourquoi il est de tradition de les accrocher à la porte principale des maisons.")
let carte11=new carte ("popup11","La dinde","La dinde est l'un des plats les plus demandés pour le dîner de Noël et représente beaucoup.La tradition de manger de la dinde vient des États-Unis, où l'oiseau est un plat typique de Thanksgiving, aussi appelé Jour de dinde. En effet, environ 50 millions de dindes sont consommées à cette date.Thanksgiving Day, largement célébré aux États-Unis, Il est arrivé en 1621 pour commémorer et surtout remercier l'abondance des récoltes. Dès le début, la dinde était servie à cette fête.")
let carte19=new carte ("popup19","Le Poinsettia","Le poinsettia, aussi appelée l’étoile de Noël, est une plante originaire du Mexique. La légende veut qu’elle soit devenue la fleur mexicaine de Noël quand une jeune fille d’un pauvre paysan a voulu apporter un cadeau à la Vierge Marie la veille de Noël. Comme cette jeune fille n’avait rien à donner, un ange lui a dit de prendre des mauvaises herbes, mais les mauvaises herbes cueillies se sont miraculeusement transformées en de belles fleurs écarlates.")
let carte16=new carte ("popup16","Le bonhomme de neige"," D'anciennes représentations picturales le montrent comme un hiver personnifié dans une figure surdimensionnée plutôt menaçante, avec une expression sinistre et un balai menaçant.Mais au XIXe siècle, l'attitude envers l'hiver change graduellement. La luge, le patinage sur glace et même les bonhommes de neige deviennent populaires. Les livres pour enfants présentent désormais de plus en plus des vues joyeuses de l'hiver. La forme du bonhomme est devenue sphérique et l'apparence beaucoup plus conviviale. ")
let carte0=new carte ("popup0","Le bonhomme de pain d'épices","Le pain d'épices est utilisé depuis le xve siècle et l'attribution d'une forme humaine se pratiquait déjà au xvie siècle1. Les premiers bonshommes de pain d'épices connus ont été servis à la cour de la reine Élisabeth Ire d'Angleterre qui aimait beaucoup offrir à ses invités de marques des bonshommes à leur effigie.")
let carte17=new carte ("popup17","La bûche de Noël","Les bûches de Noël étaient mises dans un foyer pour y brûler pendant au moins douze heures, mais il y avait des règles strictes quant à leur utilisation. Elles ne pouvaient pas être achetées, mais devaient être reçues comme cadeaux; elles devaient provenir d’un arbre cultivé sur ses propres terres, elles devaient être allumées avec des fragments de journaux de l’année passée.")
let carte23=new carte ("popup23","Les cadeaux de Noël","L’échange de cadeaux remonte à une ancienne coutume romaine des Saturnales célébrant leur fête païenne,. Quand les chrétiens ont adopté cet échange de cadeaux, ils ont affirmé qu’il représentait les dons de l’or, de l’encens et de la myrrhe que les Mages d’Orient ont réalisés quand ils sont venus rendre hommage au nouveau-né Jésus-Christ.")

// let tableau=["","fenetre1","fenetre2","fenetre3"]
let tableauCartes=[carte0,carte1,carte2,carte3,carte4,carte5,carte6,carte7,carte8,carte9,carte10,carte11,carte12,carte13,carte14,carte15,carte16,carte17,carte18,carte19,carte20,carte21,carte22,carte23,carte24 ]
   



for(let i in tableauCartes) {
    let idFenetre="fenetre"+i 
    let idPopup="popup"+i
    let idCarte="carte"+i
    let valeurI=parseInt(i)
    let chiffreClique=valeurI+1
    let idChiffre="chiffre"+(chiffreClique)
    let J= 25-chiffreClique
    let texteJ= "J-" + J + " !!!!!"
    let superUValue=false
    let superU=document.getElementById("superutilisateur");
    
    superU.addEventListener("click", 
        function superUactive () {
            console.log ("coucou" , (superUValue)  ) 
            if (superUValue==false){
                superU.style.backgroundColor="rgb(255, 0, 0)" ;
                superU.style.fontWeight="bold"
                return superUValue=true ;}
            else    {
                superU.style.backgroundColor="grey" ;
                superU.style.fontWeight="normal"
                return superUValue=false ;}
        })
    document.getElementById(idFenetre).addEventListener("click", ouvertureFenetre) 
    
    function ouvertureFenetre(){
        idCarte=String(idCarte)
        let popup = document.getElementById(idPopup);
        let chiffre = document.getElementById(idChiffre);
        let gingerman = document.getElementById("gingerman");
        let gingerman2 = document.getElementById("gingerman2");
        
        

        function afficherJ() { 

            let gingerman=document.getElementById("gingerman")
            gingerman.textContent=""// ràz avant edition
            
            let parag=document.createElement("p")
            let texteJour=document.createTextNode(texteJ)
            parag.appendChild(texteJour)
            parag.style.font="red xx-large"
            parag.style.display="inline-block"
            parag.style.position="absolute"
            parag.style.bottom="10%"
            parag.style.left="10%"
            parag.style.backgroundColor="white"
            parag.style.border="solid black 5px"
            parag.style.textAlign="center"
            gingerman.appendChild(parag)
            console.log (texteJ)
        }

        tableauCartes[i].afficherDansPopup()
        afficherJ()
        chiffre.classList.toggle("transitionChiffre");
        let dateDuJour=new Date
        let numeroDuJour=dateDuJour.getDate()

        function montrerElementsCaches(){
            popup.classList.add("show");
            gingerman.classList.add("afficheGinger");
            setTimeout(ràzGingerman, 4000) ;
            setTimeout(ràzPopup, 5000) ;
            function ràzGingerman() { gingerman.classList.remove("afficheGinger"); }
            function ràzPopup () { popup.classList.remove("show");}

            
            
        }

        if (superUValue==true) {montrerElementsCaches()} 
        else {

            if (chiffreClique==numeroDuJour) {
                montrerElementsCaches()
            }
            else {
                errorMessage.classList.add("show")
                gingerman2.classList.add("afficheGingerError");
                setTimeout(ràzGingermanerror, 5000) ;
                function ràzGingermanerror() { gingerman2.classList.remove("afficheGingerError");errorMessage.classList.remove("show") ;
                }
               
                
            }
        }

        
            
    }

    
}



// // PARTIE POUR METTRE DES IMAGES PAR FENETRE MAIS PB CAR Z INDEX NE FCTNE QUE SI ELEMENT POSITIONNE
// class images {

//     constructor (idFenetre,image,texteAlt) {
//         this.idFenetre=idFenetre
//         this.image=image ;
//         this.texteAlt=texteAlt ;
//     }
//     associerImageAFenetre() {
//         let fenetre=document.getElementById(this.idFenetre)
//         let imageUrl="url(images/"+this.image+")"
//         console.log(imageUrl)
//         fenetre.style.backgroundImage=imageUrl


//     }
// }
// let sapin=new images ("fenetre0","sapin.svg","")
// let perenoel=new images ("fenetre1","perenoel.svg","")
// let couronne=new images ("fenetre2","1.jpg","")
// sapin.associerImageAFenetre()
// perenoel.associerImageAFenetre()
// couronne.associerImageAFenetre()