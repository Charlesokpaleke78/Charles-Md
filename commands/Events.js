/** 

Manjiro-Sano-md
by Cod3Uchiha
Takudzwa Mlambo 
 
 **/








const { france } = require('../framework/france');
const { attribuerUnevaleur } = require('../bdd/welcome');

async function events(nomCom) {
    france({
        nomCom: nomCom,
        categorie: 'Group'
    }, async (dest, zk, commandeOptions) => {
        const { ms, arg, repondre, superUser, verifAdmin } = commandeOptions;

        if (verifAdmin || superUser) {
            if (!arg[0] || arg.join(' ') === ' ') {
                repondre(nomCom + ' ' + ' on to active and ' + ' ' + nomCom + ' ' + 'off to put off');
            } else {
                if (arg[0] === 'on' || arg[0] === 'off') {
                    
                    await attribuerUnevaleur(dest, nomCom, arg[0]);
                    repondre( nomCom + "is Successfully Activated" + arg[0]);
                } else {
                    repondre('type on to activate or off to put it off');
                }
            }
        } else {
            repondre('You can\'t use this commands ');
        }
    });
}

// Appel de la fonction events pour les valeurs 'welcome' et 'goodbye'
events('welcome');
events('goodbye');
events('antipromote');
events('antidemote') ;
