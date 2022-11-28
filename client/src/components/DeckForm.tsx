import React, { useEffect, useState } from 'react'

import { Formik, Field, Form, FormikHelpers } from 'formik';

import { Link } from 'react-router-dom'

import addDeck from '../api/addDeck';
import deleteDeck from '../api/deleteDeck';
import getDecks from '../api/getDecks';
import { Values } from '../api/config';




const DeckForm: React.FC = () => {

    const [decks, setDecks] = useState<Values[]>([]);

    async function handleDelete(deckId: string) {
        await deleteDeck(deckId)
        setDecks(decks.filter((deck: Values) => deck._id !== deckId));
    }

    useEffect(() => {
        async function fetchDecks() {
            setDecks(await getDecks());
        }
        fetchDecks();
    }, [])

    return (

        <div className="home">
            <ul className='deck--grid'>
                {
                    decks.map((item: Values) => (
                        <li className='deck--grid--item' key={item._id}>
                            <Link to={`/decks/${item._id}`} className="link">{item.title.toUpperCase()}</Link>
                            <button onClick={() => handleDelete(item._id)} className='close'></button>
                        </li>
                    ))
                }
            </ul>


            <Formik
                initialValues={{
                    _id: '',
                    title: '',
                    __v: 0,
                }}
                onSubmit={async (values: Values, actions: FormikHelpers<Values>) => {


                    const deck = await addDeck(values);;

                    setDecks([...decks, deck]);

                    actions.resetForm();
                    actions.setSubmitting(false);

                }}
            >

                <Form className='deck--form'>
                    <label htmlFor="title" className='deck--form--title-label'>Deck title</label>
                    <Field id="title" className="deck--form--title--input" name="title" placeholder="My awesome deck" />

                    <button className='deck--form--submit' type="submit">Create Deck</button>
                </Form>

            </Formik>
        </div>




    )
}

export default DeckForm;