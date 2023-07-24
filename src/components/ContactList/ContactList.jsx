import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ContactItem } from 'components/ContactItem/ContactItem';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/selectors';
import { fetchContacts, deleteContact } from 'redux/operations';
import * as S from './ContactList.styled';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {isLoading && <S.Spinner />}

      {!filteredContacts?.length && !error && !isLoading && (
        <S.Text>No contacts found.</S.Text>
      )}
      {error && <S.Text>Sorry. {error}</S.Text>}
      <S.List>
        {filteredContacts.map(({ id, name, phone }) => (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={phone}
            onClick={() => onDeleteContact(id)}
          />
        ))}
      </S.List>
    </>
  );
};
