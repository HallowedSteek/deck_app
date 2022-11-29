import React, { useEffect, useState } from 'react'

import { Formik, Field, Form, FormikHelpers } from 'formik';

import { Link, useParams } from 'react-router-dom'

// import addDeck from '../api/addDeck';
// import deleteDeck from '../api/deleteDeck';
// import getDecks from '../api/getDecks';

import { Values } from '../api/config';

import createCard from '../api/createCard';




const Decks: React.FC = () => {

    const [cards, setCards] = useState<string[]>([]);

    const { deckId } = useParams();


    console.log(cards)
    // async function handleDelete(deckId: string) {
    //     await deleteDeck(deckId)
    //     setDecks(decks.filter((deck: Values) => deck._id !== deckId));
    // }

    // useEffect(() => {
    //     async function fetchDecks() {
    //         setDecks(await getDecks());
    //     }
    //     fetchDecks();
    // }, [])

    return (

        <div className="home">
            <ul className='deck--grid'>
                {
                    cards.map((item) => (
                        <li className='deck--grid--item' key={item}>
                            {item}
                            {/* <button onClick={() => handleDelete(item._id)} className='close'></button> */}
                        </li>
                    ))
                }
            </ul>


            <Formik
                initialValues={{
                    _id: '',
                    title: '',
                    text: '',
                    cards: [''],
                    __v: 0,
                }}
                onSubmit={async (values: Values, actions: FormikHelpers<Values>) => {



                    const {cards: serverCards } = await createCard(values, deckId!);

                    setCards(serverCards);
                

                    actions.resetForm();
                    actions.setSubmitting(false);

                }}
            >

                <Form className='deck--form'>
                    <label htmlFor="text" className='deck--form--text-label'>Decks text</label>
                    <Field id="text" className="deck--form--text--input" name="text" placeholder="My awesome deck" />

                    <button className='deck--form--submit' type="submit">Create Decks</button>
                </Form>

            </Formik>
        </div>




    )
}

export default Decks;