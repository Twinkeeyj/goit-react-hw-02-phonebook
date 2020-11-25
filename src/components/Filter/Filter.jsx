import React, { Component } from 'react';

const FilterName=function({filterRender, filter}){
return(
  <div>
    <label>Find contacts by name</label>
    <input type="text" value={filter} onChange={e=>filterRender(e.target.value)} />

  </div>
)
}
export default FilterName





































// const INITIAL_STATE = {
//   contacts: [

//   ],
//   filter: '',
//   name: '',
//   number: '',
// };
// export default class Filter extends Component {
//   state = { ...INITIAL_STATE };

//   handleFilter = event => {
//     const name = event.target.name;
//     this.setState({ [name]: name.value });
//   };

//   filterName = event => {
//     this.state.contacts.map(e => {
//       if (e.name.toLowerCase() === e.filter.toLowerCase()) {
//         return (
//           <li>
//             {e.name}: {e.number}
//           </li>
//         );
//       }
//     });
//   };

//   render() {
//     const { filter } = this.state;
//     return (
//       <>
//         <input
//           type="text"
//           name="filter"
//           value={filter}
//           onChange={this.handleFilter}
//         />
//         {filter ? this.filterName : this.props.children}
//       </>
//     );
//   }
// }
