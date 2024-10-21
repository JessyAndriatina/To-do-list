
export const trierTachesCroissant = (taches) => {
    return [...taches].sort((a, b) => a.titre.localeCompare(b.titre));
};

export const trierTachesDecroissant = (taches) => {
    return [...taches].sort((a, b) => b.titre.localeCompare(a.titre));
};

export const trierTachesDateCroissante = (taches) => {
    return [...taches].sort((a, b) => new Date(a.dateCreation) - new Date(b.dateCreation));
};

export const trierTachesDateDecroissante = (taches) => {
    return [...taches].sort((a, b) => new Date(b.dateCreation) - new Date(a.dateCreation));
}; 

