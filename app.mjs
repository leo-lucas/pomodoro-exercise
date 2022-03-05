

function App() {
  const [state, setState] = React.useState(10)
  return (
    <div class="h-screen bg-blue-700 flex justify-center">
      <div class="self-center bg-emerald-400 w-64 h-32 rounded-lg flex" onClick={()=>setState(state<12?state+1: 0)}>
        <div class={`z-10 bg-violet-600 h-32 w-${state}/12 rounded-lg`}>
    
        </div>
        <div class={`z-10 bg-emerald-400 h-32 w-${12-state}/12 rounded-lg`}>
      
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'))
