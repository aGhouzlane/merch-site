import React from 'react'
import { v4 } from 'uuid'
import PropTypes from 'prop-types'

export default function newMerchForm(props) {
  function handleNewMerchFormSubmission(event) {
    event.preventDefualt()
    props.onNewMerchCreation({
      merchName: event.target.names.value,
      description
    })
  }
}