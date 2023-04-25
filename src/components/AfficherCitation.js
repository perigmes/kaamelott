import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const AfficherCitation = () => {
    return (
        <div>
            <form action="AfficherCitation.js" method="post">
            <label class="top" for="id_texte"> Ecrivez votre citation ici: </label>
					<textarea id="id_texte" name="texte" cols="70" rows="7"></textarea>
            </form>
        </div>
    );
};
 /*A faire Fonction qui récupère la citation ecrite et faire un stack en html qui les empile */

export default AfficherCitation;