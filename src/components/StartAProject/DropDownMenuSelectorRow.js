import React from 'react';

const DropDownMenuSelectorRow = (props) => {
  return (
    <div 
      className="menu-selector-row"
      onClick={() => chooseCategory(props)}
    >
      <p>{props.category}</p>
    </div>
  );
}


const chooseCategory = (props) => {
  props.toggleDropDownClick(!props.dropDownClicked);
  const headerTitle = document.getElementById("dropdown-category-title");
  headerTitle.innerHTML = props.category;
}

export default DropDownMenuSelectorRow;