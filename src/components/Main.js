import React from 'react';
import Select from 'react-select';

import Chart from 'react-google-charts';
import axios from 'axios';

const options = [
  { value: 0, label: '0 - Lights Off' },
  { value: 1, label: '1 - Lights On' },
  { value: 2, label: '2 - Fan Off' },
  { value: 3, label: '3 - Fan On' },
  { value: 4, label: '4 - Hunger' },
  { value: 5, label: '5 - Alert' },
  { value: 6, label: '6 - ...' },
  { value: 7, label: '7 - ...' },
  { value: 8, label: '8 - ...' },
  { value: 9, label: '9 - ...' },
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
      selectedOptionVal: 0,
      data:[],
    }

    handleChange = selectedOption => {
      axios.post(`http:localhost:8000/api/predict/digit/${selectedOption.value}`)
      .then((res) => {
          this.setState({ data:res.data})
      })
      .catch((err) => console.log(err.data))

      this.setState({ selectedOption: selectedOption });
      if((selectedOption.value === 1) || (selectedOption.value === 0)) {
        this.setState({ selectedOptionVal: selectedOption.value });
      }
    };

    render() {
      const { selectedOptionVal, selectedOption } = this.state;
      if(selectedOptionVal === 0) {
        var imgComponent = <img className="Main-img" src="/images/light_off.jpg" alt=""/>;
      }else{
        imgComponent = <img className="Main-img" src="/images/light_on.jpg" alt=""/>;
      }
      return(
        <div className="Main">
          <div className="Main-overlay">
            <div className="Main-content">
              <div>
                {/* <img className="Main-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqfCpzjglOZEfyx_4p6NFUHh1qQE50yIdUX0uYmyiNQbx78MNx" alt=""/> */}
                {imgComponent}
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
            <br/>
            <div className="Main-content" style={{marginBottom: '30px'}}>
              {/* <div>
                
              </div> */}
              <div className="main-inside-box" style={{width:'80%', paddingTop: '50px'}}>
                Probability Distribution Bar Graph of predicted digits
                <br/>
                <br/> 

                <Chart
                  width={'800px'}
                  height={'300px'}
                  chartType="Bar"
                  loader={<div>Loading Probability Distribution Chart</div>}
                  data={[
                    ['Digits', 'Probability'],
                    ['0', 0.26],
                    ['1', 0.81],
                    ['2', 0.19],
                    ['3', 0.18],
                    ['4', 0.26],
                    ['5', 0.22],
                    ['6', 0.19],
                    ['7', 0.05],
                    ['8', 0.04],
                    ['9', 0.29],
                  ]}
                  options={{
                    // Material design options
                    chart: {
                      title: ' ',
                      chartArea: {'width': '100%', 'height': '80%'},
                    },
                  }}
                  // For tests
                  rootProps={{ 'data-testid': '2' }}
                />

              </div>
              
            </div>

          </div>

        </div>
      );
    }
}
  
export default Main;
  