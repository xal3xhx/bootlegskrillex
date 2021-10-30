import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Stats from '../../components/Stats';
import Layout from '../../components/Layout';
import Head from 'next/head'
import SecureTemplate from '../../public/secure-template';


const choices = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

var date = new Date();

var year=date.getFullYear();
var month=date.getMonth()+1
var day=date.getDate();
var format=month+" "+day+" "+year;
var curr = new Date(format)

let week = []
let monday = getMonday(curr);

console.log(date)
console.log(curr)

for (let i = 1; i <= 7; i++) {
  let first = monday.getDate() - monday.getDay() + i

  let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)
  week.push(day)
}

function getMonday(d) {
  d = new Date(d);
  var day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
  return new Date(d.setDate(diff));
}

async function FetchWeek() {
  let response = await fetch('/api/profiles/stats');

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    let myjson = await response.json();
    const activty = myjson["Drinks"]

		var o = {};
		activty.forEach((i) => {
		  var Date = i.Date;
		  i.count = parseInt(i.count)
		  if (!o[Date]) {
		    return o[Date] = i
		  }
		  return o[Date].count = o[Date].count + i.count
		})

		var res = []
		Object.keys(o).forEach((key) => {
		 res.push(o[key])
		})

		var answer1 = ""
		// console.log(week)
	    for (const x of res) {
	    	if(week.includes(x.Date)) {
				var d = new Date(x.Date);
				var dayName = choices[d.getDay()];
				// console.log(dayName)
	    		answer1 = answer1 + '"' + dayName + '"' + ': ' + x.count + ', '
	    	}
    	}
    	answer1 = answer1.replace(/\, $/, "");
    	answer1 = '{' + answer1 + '}'
    	answer1 = await Promise.resolve(answer1);
    	return JSON.parse(answer1);
 }
}

async function FetchAll() {
  let response = await fetch('/api/profiles/stats');

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    let myjson = await response.json();
    const activty = myjson["Drinks"]

		var o = {};
		activty.forEach((i) => {
		  var Date = i.Date;
		  i.count = parseInt(i.count)
		  if (!o[Date]) {
		    return o[Date] = i
		  }
		  return o[Date].count = o[Date].count + i.count
		})

		var res = []
		Object.keys(o).forEach((key) => {
		 res.push(o[key])
		})

		var All = ""
		var AllDates = ""
	    for (const x of res) { 	
	    	// AllDates = AllDates + "'" + x.Date + "', "
	    	AllDates = AllDates + '' + x.Date + ', '
	    	All = All + '"' + x.Date + '"' + ': ' + x.count + ', '
    	}

    	AllDates = AllDates.replace(/\, $/, "");
    	// AllDates = '[' + AllDates + ']'
    	AllDates = await Promise.resolve(AllDates);

    	All = All.replace(/\, $/, "");
    	All = '{' + All + '}'
    	All = await Promise.resolve(All);

    	return AllDates + "%" + All
 }
}

class IndexPage extends Component {

	state = { All: {}, week: {}, AllDates: [] }

	componentDidMount() {
		FetchWeek().then(week => {
	    	this.setState({ week });
	    	// console.log(week)
		});

		FetchAll().then(data => {
	    	var array = data.split('%'),
    		AllDates = array[0], All = array[1]

    		All = JSON.parse(All);
    		AllDates = AllDates.split(", ");

			this.setState({All});
			this.setState({AllDates});

			// console.log(this.state.All)
		});
	}

  	render() {

    return (

      <Layout pageTitle="AA Drinking activity">
          <div className="row position-absolute w-100 h-100">

            <section className="col-md-5 position-relative d-flex flex-wrap h-100 align-items-start align-content-between bg-black px-0">
				<Stats choices={choices} stats={this.state.week} graphOnly="False" Name="This Week"/>
            </section>

            <section className="col-md-5 position-relative d-flex flex-wrap h-100 align-items-start align-content-between bg-black px-20">
				<Stats choices={this.state.AllDates} stats={this.state.All} graphOnly="True" Name="ALL TIME"/>
            </section>

          </div>
      </Layout>
    );
  }
};

function Drinks() {
  return (
    <div className="container">
      <Head>
        <title>Servers | Bootlexskrillex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          The servers of <a>BootlegSkrillex</a>
        </h1>

      <IndexPage />

      </main>
    </div>
  );
}

export default SecureTemplate(Drinks)