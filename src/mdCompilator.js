module.exports = function (md) {
    //convertie le markdown en html et le retourne
    // Generated by Nyapilot
    const mdProprieties = [
        { recherche: /(#+)(.*)/g, balise1: '<h1>', balise2: '</h1>' },                       //# Titre                               (H1)
        { recherche: /(##)(.*)/g, balise1: '<h2>', balise2: '</h2>' },                      //## Sous-titre                         (H2)
        { recherche: /(###)(.*)/g, balise1: '<h3>', balise2: '</h3>' },                     //### Sous-sous-titre                   (H3)
        { recherche: /(####)(.*)/g, balise1: '<h4>', balise2: '</h4>' },                    //#### Sous-sous-sous-titre             (H4)
        { recherche: /(#####)(.*)/g, balise1: '<h5>', balise2: '</h5>' },                   //##### Sous-sous-sous-sous-titre       (H5)
        { recherche: /(######)(.*)/g, balise1: '<h6>', balise2: '</h6>' },                  //###### Sous-sous-sous-sous-sous-titre (H6)
        { recherche: /\[(.*?)\]\((.*?)\)/g, balise1: '<a href="', balise2: '">$1</a>' },    //[texte](url)                         (A)
        { recherche: /!\[(.*?)\]\((.*?)\)/g, balise1: '<img src="', balise2: '" alt="$1">' },//![texte](url)                        (IMG)
        { recherche: /`(.*)`/g, balise1: '<code>', balise2: '</code>' },                    //`texte`                              (CODE)
        { recherche: /```(.*)```/g, balise1: '<pre><code>', balise2: '</code></pre>' },     //```texte```                          (CODE)
        { recherche: /\*\*(.*)\*\*/g, balise1: '<b>', balise2: '</b>' },                    //**texte**                            (B)
        { recherche: /\*(.*)\*/g, balise1: '<i>', balise2: '</i>' },                        //*texte*                              (I)
        { recherche: />(.*)/g, balise1: '<blockquote>', balise2: '</blockquote>' },         //>texte                               (BLOCKQUOTE)
        { recherche: /- (.*)/g, balise1: '<ul><li>', balise2: '</li></ul>' },               //- texte                              (UL)
        { recherche: /\d. (.*)/g, balise1: '<ol><li>', balise2: '</li></ol>' },             //1. texte                             (OL)
        { recherche: /\|(.*)\|/g, balise1: '<table><tr><td>', balise2: '</td></tr></table>' },//|texte|                              (TABLE)
        { recherche: /---/g, balise1: '<hr>', balise2: '' },                                //---                                  (HR)
        { recherche: /___/g, balise1: '<hr>', balise2: '' },                                //___                                  (HR)
        { recherche: /\n/g, balise1: '<br>', balise2: '' },                                 //\n                                   (BR)
    ];

    //pour chaque élément trouvé, on remplace le markdown par le html
    mdProprieties.forEach(({ recherche, balise1, balise2 }) => {
        md = md.replace(recherche, (match, p1, p2) => `${balise1}${p2}${balise2}`);
    });

    return md;
}
