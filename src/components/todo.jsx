import React from "react";

function ToDoItem(props) {
  return (
    <div>
      <li>
      <span class="
      effect">
        {props.text}
        </span>
        <div class="let">
          <button 
            onClick={() => {
              props.onChecked(props.id);
            }}
          >
            <i class="fa fa-trash"></i>
          </button>
        </div>
      </li>
    </div>
  );
}

export default ToDoItem;
