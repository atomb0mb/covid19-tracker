
# Covid19-Tracker 
A React JS application that tracks COVID-19 Status. Visit https://atomb0mb.github.io/covid19-tracker/


## Project Description

Watching the news about Covid-19 daily, the numbers and data gets everyone's attention. The data can tell us that the virus is spreading quickly through the specific region or entire world. What can we, as developers, do to make the situation better? We can help to spread awareness by visualizing the data. 

## Technology

* [React](https://github.com/facebook/create-react-app)
* [Material UI](https://material-ui.com/)
* [Chart.js](https://www.chartjs.org/)
* [mathdroid api](https://github.com/mathdroid/covid-19-api)

## Scope

The project is going to fetch the live data from the API using Async/Await syntax. The data is fetched from the API and it will create cards displaying the statistics as well as Charts. The data of this statistics accessed from the mathdroid API, which serving data from John Hopkins University CSSE.

## Overview

* The initial state of the data display is total number around the world.
* User can view number of cases of Covid-19 for infected, recovered, deaths.
* User may select desired country to display the result.
* User may filter by check/uncheck infected and/or deaths display for chart.
* The selected country will display in bar view.
* Due to API constraints, some data might not be able to display in real-time. E.g recovered cases data will not display for initial chart view.
