import React from 'react';
import Select from 'react-select';

const options = [
  { value: '0', label: '0' },
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
  { value: '6', label: '6' },
  { value: '7', label: '7' },
  { value: '8', label: '8' },
  { value: '9', label: '9' },
];

class Main extends React.Component {
    // constructor(){
    //   super();
    //   this.state = {
    //     selectedOption: null
    //   }
    // }

    state = {
      selectedOption: null,
    }

    handleChange = selectedOption => {
      this.setState({ selectedOption });
      console.log(`Option selected:`, selectedOption);
    };

    render() {
      const { selectedOption } = this.state;
      return(
        <div className="Main">
          <div className="Main-overlay">
            <div className="Main-content">
              <div>
                <img className="Main-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqfCpzjglOZEfyx_4p6NFUHh1qQE50yIdUX0uYmyiNQbx78MNx" alt=""/>
              </div>
              <div className="main-inside-box">
                Select Random Class from dataset 
                <br/>
                <Select
                  className="dropdown"
                  value={selectedOption}
                  onChange={this.handleChange}
                  options={options}
                />
                <br/>
                <button className="btn btn-primary" type="submit">Proceed</button>
              </div>
            </div>
          </div>

        </div>
      );
    }
}
  
export default Main;
  