import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import './DropDown.css'

const countryOptions = [
  {key: 'eu', value: 'eu', flag: 'eu', text: 'Europeanunion'},
  {key: 'in', value: 'in', flag: 'in', text: 'India'},
  {key: 'uk', value: 'uk', flag: 'uk', text: 'United Kingdom'},
  {key: 'us', value: 'us', flag: 'us', text: 'United States'}
]

const DropdownExampleSearchSelection = () => (
  <Dropdown id='dropdown'
    placeholder='Select Country'
    fluid
    search
    selection
    options={countryOptions}
  />
)

export default DropdownExampleSearchSelection
