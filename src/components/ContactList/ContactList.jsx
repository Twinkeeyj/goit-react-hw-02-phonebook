import { render } from '@testing-library/react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from "./ContactList.module.css"

const ContactList = function ({ list, Delete }) {

  return (
    <>
      <ul className={classes.container}>
        {list.map(e => {
          return (
            <li className={classes.list} key={e.id}>
              {e.name}: {e.number}
              <button className={classes.button} type="button" onClick={() => Delete(e.id)}>
                Видалити
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default ContactList;

ContactList.propTypes = {
  Delete: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};
