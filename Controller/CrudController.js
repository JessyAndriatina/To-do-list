import { nouvtache, recupereDonnees, modifierPartieTache, supprimerTache } from '../Model/tacheModel';

export const fetchTasks = async () => {
    return await recupereDonnees();
};

export const addTask = async (titre, description) => {
    await nouvtache(titre, description);
};

export const updateTask = async (id, changements) => {
    await modifierPartieTache(id, changements);
};

export const deleteTask = async (item) => {
    await supprimerTache(item);
};