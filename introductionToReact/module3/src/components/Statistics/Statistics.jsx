import StatisticsLine from "../StatisticsLine/StatisticsLine";

function Statistics({good, neutral, bad}) {

  if (good === 0 && neutral === 0 && bad === 0) {
    return (<>
      <p>No feedback given</p>
    </>)
  } else {
    const all = good + neutral + bad
    const average = all === 0 ? 0 : (good - bad) / (all)
    const positive = all === 0 ? 0 : good / all * 100

    return (<>
      <table>
        <tbody>
        <tr><StatisticsLine text="good" value={good}/></tr>
        <tr><StatisticsLine text="neutral" value={neutral}/></tr>
        <tr><StatisticsLine text="bad" value={bad}/></tr>
        <tr><StatisticsLine text="all" value={all}/></tr>
        <tr><StatisticsLine text="average" value={average}/></tr>
        <tr><StatisticsLine text="positive" value={positive}/></tr>
        </tbody>
      </table>


    </>)
  }

}

export default Statistics
