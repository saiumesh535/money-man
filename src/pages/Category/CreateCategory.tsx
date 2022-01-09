import { IonPage, IonContent } from '@ionic/react';
import { IconButton, List, ListItem, ListItemText, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import DeleteIcon from '@mui/icons-material/Delete';
import './CreateCategory.scss';
import { useStore, ZustandState } from '../../data/store';
import { Category } from '../../types/commonTypes';
import SnackBarComponent from '../../components/SnackBar/SnackBarComponent';

function CreateCategory(): JSX.Element {
    const [categoryName, setCategoryName] = useState('');
    const categories: Category[] = useStore((state: ZustandState) => state.categories);
    const getCategories = useStore((state: ZustandState) => state.loadCategories);
    const addCategory = useStore((state: ZustandState) => state.createCategory);
    const deleteCategory = useStore((state: ZustandState) => state.deleteCategory);

    useEffect(() => {
        getCategories();
    }, [])

    async function saveCategory() {
        const category: Category = { name: categoryName }
        addCategory(category)
    }

    return (
        <IonPage>
            <IonContent>
                <div className="category page-content">
                    <TextField
                        id="outlined-basic"
                        label="Category name"
                        variant="outlined"
                        value={categoryName}
                        className='textField'
                        onChange={(e) => setCategoryName(e.target.value)}
                    />
                    <ButtonComponent handler={saveCategory} label="Create" />
                    <Typography sx={{ mt: 4, mb: 2, ml: 3 }} variant="h6" component="div">
                        Categories
                    </Typography>
                    <List>
                        {categories?.map(category => {
                            return <ListItem className='category-row' key={category.name}
                                secondaryAction={
                                    <IconButton edge="end" aria-label="delete" onClick={() => deleteCategory(category)}>
                                        <DeleteIcon />
                                    </IconButton>
                                }
                            >
                                <ListItemText
                                    primary={category.name}
                                />
                            </ListItem>
                        })}
                    </List>
                    <SnackBarComponent/>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default CreateCategory;
