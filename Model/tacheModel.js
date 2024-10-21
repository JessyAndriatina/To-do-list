

export const recupereDonnees= async () => {
    try {
      const response = await fetch('http://localhost:3000/tache'); 
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
    } 
  }

  export const supprimerTache = async (item) => {
   console.log(item.id);
    const response = await fetch(`http://localhost:3000/tache/${item.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      console.log(`Tâche ${item.id} supprimée avec succès.`);
    } else {
      console.error('Erreur lors de la suppression de la tâche.',response.status);
    }
    
  };
  export  const nouvtache=async (Titreajout,description) => {
      
    try {
        const response = await fetch('http://localhost:3000/tache');
        const data = await response.json();
        
        const lastId = data.length > 0 ? Math.max(...data.map(t => t.id)) : 0;
        const newid= (lastId + 1).toString(); 
        const newTask = {
          id: newid,
          titre: Titreajout,
          Description: description,
          termine: false,
          dateCreation: new Date().toISOString()
        };
    
        const addResponse = await fetch('http://localhost:3000/tache', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newTask),
        });
    
        if (addResponse.ok) {
          console.log("nouvel tache OK");
        } else {
          console.error('Erreur lors de l\'ajout de la tâche:', addResponse.status);
        }
      } catch (error) {
        console.error('Erreur lors de l\'enregistrement de la tâche:', error);
      }
    };

   export const modifierPartieTache = async (itemId, changements) => {
        try {
          const response = await fetch(`http://localhost:3000/tache/${itemId}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(changements),
          });
      
          if (response.ok) {

          } else {
            console.error('Erreur lors de la mise à jour',response.error);
          }
        } catch (error) {
          console.error('Erreur:', error);
        }
      };

    

