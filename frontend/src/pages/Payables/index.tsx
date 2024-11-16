import useViewModel from './viewModel'

export function Payables() {
  const { payables } = useViewModel()

  return <div className='payables-page'>
    <div className='payables-list'>
      <div className='row'>
        <div>
          ID
        </div>
        <div>
          Value
        </div>
        <div>
          Emission Date
        </div>
      </div>

      {payables.map((payable) => {
        return (
          <div className='row'>
            <div>
              {payable.id}
            </div>
            <div>
              {payable.value}
            </div>
            <div>
              {payable.emissionDate.toString()}
            </div>
          </div>
        )
      })}
    </div>
  </div>
}