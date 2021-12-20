import { IonPage, IonContent } from '@ionic/react';
import { IconButton, List, ListItem, ListItemText, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import DeleteIcon from '@mui/icons-material/Delete';
import './CreateCategory.scss';
import { CATEGORIES } from '../../helpers/constants';
import HeaderComponent from '../Header/HeaderComponent';

function CreateCategory(): JSX.Element {
    const [categoryName, setCategoryName] = useState('');
    function saveCategory() {
        console.log("button clicked");
    }
    return (
        <IonPage>
            <HeaderComponent name= "Create Category"/>
            <IonContent>
                <div className="page-content">

                    <TextField
                        fullWidth id="outlined-basic"
                        label="Category name"
                        variant="outlined"
                        value={categoryName}
                        onChange={(e) => setCategoryName(e.target.value)}
                    />
                    <ButtonComponent handler={saveCategory} label="Create Category" />
                    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                        Categories
                    </Typography>
                    <List>
                        {CATEGORIES.map(category => {
                            return <ListItem className='category-row'
                                secondaryAction={
                                    <IconButton edge="end" aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                }
                            >
                                <ListItemText
                                    primary={category}
                                />
                            </ListItem>
                        })}
                    </List>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default CreateCategory;
