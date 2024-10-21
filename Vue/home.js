import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput, Modal ,Dimensions} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { fetchTasks, addTask, updateTask, deleteTask } from '../Controller/CrudController';
import { trierTachesCroissant, trierTachesDecroissant, trierTachesDateCroissante, trierTachesDateDecroissante  } from '../Controller/TriController';
import styles from './styles';

const HomeScreen = () => {
    const listTitleFontSize = Dimensions.get('window').width * 0.03;

    const [tache, setTache] = useState([]);
    const [item, setItem] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [modalVisible, setModalVisible] = useState(false); 
    const [modalVisible1, setModalVisible1] = useState(false);
    const [Titreajout, setTitreajout] = useState('');
    const [description, setDescription] = useState('');
    const [modalReadVisible, setModalReadVisible] = useState(false); 
    const [modalUpdateVisible, setModalUpdateVisible] = useState(false); 
    const [filtreOptionsVisible, setFiltreOptionsVisible] = useState(false); 
    const [selectedTache, setSelectedTache] = useState(null);
    const [isSorted, setIsSorted] = useState(false); 
    const [isSortedDesc, setIsSortedDesc] = useState(false);

    useEffect(() => {
      const loadData = async () => {
          const result = await fetchTasks();
          setTache(result);
      };
      loadData();
  }, []);
  
      const handleOpenModal = (item) => {
        setItem(item);
        if (!modalVisible) {
          setModalVisible(true);
        }
      };
    
      const handleCloseModal = () => {
        setModalVisible(false); 
      };
      const handleOpenModal1 =  ()=> {
        if (!modalVisible1) {
          setModalVisible1(true);
        }
      };
      const handleCloseModal1 = () => {
        setModalVisible1(false); 
      };
      const handleCloseModalRead = () => {
        setModalReadVisible(false); 
      };
      const handleCloseModalUptate = () => {
        setModalUpdateVisible(false); 
      };
      const handleRead = (tache) => {
        setSelectedTache(tache); 
        setModalReadVisible(true); 
      };
      const toggleFiltreOptions = () => {
        setFiltreOptionsVisible(!filtreOptionsVisible);
      };
      const toggleUpdate = () => {
        setModalUpdateVisible(!modalUpdateVisible);
    
      };
     
      //CRUD
      const OnclikAjout = async () => {
        await addTask(Titreajout, description);
        // Recharger les données après ajout
        const result = await fetchTasks();
        setTache(result);
        setTitreajout(''); 
        setDescription(''); 
        setModalVisible1(false);
      
      };

      
    const handleSaveUpdate =  async () => {
        const changements = {
          titre: item.titre, 
          Description: item.Description 
        };

        await updateTask(item.id, changements);
        const result = await fetchTasks();
        setTache(result);
        setModalUpdateVisible(false);
      };
    
      const handleSaveStatut =  async () => {
        const changements = {
          "termine": !item.termine
        };
        
        await updateTask(item.id, changements);
        setItem({ ...item, termine: !item.termine });
        const result = await fetchTasks();
        setTache(result);
      };
      const handlesuprimer =  async () => {
        await deleteTask(item);
        const result = await fetchTasks();  
        setTache(result);
        setModalVisible(false); 
      };

      // TRIE
      const trierTaches = (type) => {
        let sortedTasks;
        switch (type) {
            case 'croissant':
                sortedTasks = trierTachesCroissant(tache);
                setIsSorted(true);
                setIsSortedDesc(false);
                break;
            case 'decroissant':
                sortedTasks = trierTachesDecroissant(tache);
                setIsSortedDesc(true);
                setIsSorted(false);
                break;
            case 'dateCroissante':
                sortedTasks = trierTachesDateCroissante(tache);
                setIsSorted(false);
                setIsSortedDesc(false);
                break;
            case 'dateDecroissante':
                sortedTasks = trierTachesDateDecroissante(tache);
                setIsSorted(false);
                setIsSortedDesc(false);
                break;
            default:
                sortedTasks = tache; // Aucun tri
                break;
        }
        setTache(sortedTasks);
        toggleFiltreOptions();
    };
      //Filtre recherche
      const filterTache = (query, tache) => {
        if (!query) return tache; 
        return tache.filter(tache => tache.titre.toLowerCase().includes(query.toLowerCase())); 
      };
      return (
        <View style={styles.container}>
            {selectedTache && (
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalReadVisible}
              onRequestClose={() => setModalReadVisible(false)}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                <TouchableOpacity style={styles.closeButton} onPress={handleCloseModalRead}>
                  <Ionicons name="close" size={24} color="#333" />
                </TouchableOpacity>
                  <Text style={styles.headerTitle}>{selectedTache.titre}</Text>
                  <Text style={styles.modalTitle}>{selectedTache.Description}</Text>
                  <Text style={styles.modalText}>
                  {selectedTache.termine ? 'Cette tâche est déjà terminée' : 'Cette tâche n\'est pas encore terminée'}
                  </Text>
                  
                </View>
              </View>
            </Modal>)}
            {filtreOptionsVisible && (
            <View style={styles.filterOptionsContainer}>
            <TouchableOpacity style={styles.filterOption} onPress={() => trierTaches('croissant')}>
                <Text style={styles.filterOptionText}>A à Z</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterOption} onPress={() => trierTaches('decroissant')}>
                <Text style={styles.filterOptionText}>Z à A</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterOption} onPress={() => trierTaches('dateCroissante')}>
                <Text style={styles.filterOptionText}>Date croissante</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterOption} onPress={() => trierTaches('dateDecroissante')}>
                <Text style={styles.filterOptionText}>Date décroissante</Text>
            </TouchableOpacity>
        </View>
          )}
  <Modal
    animationType="slide"
    transparent={true}
    visible={modalUpdateVisible}
    onRequestClose={handleCloseModalUptate}
  >
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <TouchableOpacity style={styles.closeButton} onPress={handleCloseModalUptate}>
          <Ionicons name="close" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.label}>Titre:</Text>
        <TextInput
          style={styles.input}
          value={item.titre}
          onChangeText={(text) => setItem({ ...item, titre: text })}
        />
        <Text style={styles.label}>Description:</Text>
        <TextInput
          style={styles.input}
          multiline
          numberOfLines={4}
          value={item.Description}
          onChangeText={(text) => setItem({ ...item, Description: text })}
        />


        <TouchableOpacity style={styles.submitButton} onPress={handleSaveUpdate}>
          <Text style={styles.submitButtonText}>Enregistrer</Text>
        </TouchableOpacity>
    
          </View>
        </View>
      </Modal>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
                  <Ionicons name="close" size={24} color="#333" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalButton} onPress={toggleUpdate}>
                  <Ionicons name="create-outline" size={24} style={styles.buttonIcon} />
                  <Text style={styles.modalButtonText}>Modifier</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalButton} onPress={ handleSaveStatut}>
                {item.termine ? (
              <Ionicons name="ellipse-outline" size={24}  style={styles.buttonIcon} />
            ) : (
              <Ionicons name="checkmark-done-outline" size={24} color="gray" style={styles.buttonIcon} />
            )}
                  <Text style={styles.modalButtonText}>{item.termine ? 'Marquer comme en cours' : 'Marquer comme faite'}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalButton} onPress={handlesuprimer}>
                  <Ionicons name="trash-outline" size={24} style={styles.buttonIcon} />
                  <Text style={styles.modalButtonText}>Suprimer</Text>
                </TouchableOpacity>
               
              </View>
            </View>
          </Modal>
    
          <View style={styles.listContainerTitle}>
            <Text style={[styles.listTitle, { fontSize: listTitleFontSize }]}>Liste des taches</Text>
          </View>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Rechercher"
              placeholderTextColor="#999"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            <Ionicons name="search" size={24} color="#68B684" style={styles.searchIcon} />
            <View style={styles.separator} />
        <TouchableOpacity onPress={toggleFiltreOptions}>
          <Ionicons name="filter" size={24} color="#68B684" style={styles.sortIcon} />
        </TouchableOpacity>
          </View>
          <FlatList
             data={filterTache(searchQuery, tache)}
             renderItem={({ item }) => {
               //console.log('item oh',item);
               return (
                 <TouchableOpacity style={styles.item} onPress={() => handleRead(item)}>
                   {item.termine ? (
              <Ionicons name="checkmark-done-outline" color="green"size={24}  style={styles.buttonIcon} />
            ) : (
              <Ionicons name="ellipse-outline" size={24} color="gray" style={styles.buttonIcon} />
            )}
                   <Text style={styles.title}>{item.titre}</Text>
                   <TouchableOpacity onPress={() => handleOpenModal(item)} style={styles.exportButton}>
                     <Ionicons name="ellipsis-vertical" size={24} color="#68B684" />
                   </TouchableOpacity>
                 </TouchableOpacity>
               );
             }}
          keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.listContainer}
          />
           <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible1}
            onRequestClose={() => {
              setModalVisible(!modalVisible1);
            }}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal1}>
                  <Ionicons name="close" size={24} color="#333" />
                </TouchableOpacity>
                <Text style={styles.label}>Titre:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setTitreajout(text)}
                    value={Titreajout}
                />
                <Text style={styles.label}>Description:</Text>
                <TextInput
                    style={styles.input}
                    multiline
                    numberOfLines={4}
                    value={description}
                    onChangeText={setDescription}
                    placeholder="Entrez la description ici..."
                    textAlignVertical="top"
                />
                 <TouchableOpacity style={styles.submitButton} onPress={OnclikAjout}>
                    <Text style={styles.submitButtonText}>Enregistrer</Text>
                  </TouchableOpacity>

              </View>
    
            </View>
          </Modal>
          <TouchableOpacity style={[styles.floatingButton]} onPress={() => handleOpenModal1()}>
            <Ionicons name="add-circle-outline" size={40} color="#fff" />
          </TouchableOpacity>
        </View>
      );
    };
    
    export default HomeScreen;