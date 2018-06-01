import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buyItems: ['eggs', 'sausages', 'more sausages'],
      message: '',
    };
  }

  addItem(e) {
    e.preventDefault();
    const { buyItems } = this.state;
    const newItem = this.newItem.value;

    const isOnTheList = buyItems.includes(newItem);

    if (isOnTheList) {
      this.setState({
        message: 'This item is already on the list',
      });
    } else {
      newItem !== '' && this.setState({
        buyItems: [...this.state.buyItems, newItem],
        message: '',
      });
    }
    this.addForm.reset();
  }

  removeItem(item) {
    const newBuyItems = this.state.buyItems.filter((buyItem) => buyItem !== item);

    this.setState({
      buyItems: [...newBuyItems],
    });

    if (newBuyItems.length === 0) {
      this.setState({
        message: 'No items on your list - you\'ve got it all',
      });
    }
  }

  clearList() {
    this.setState({
      buyItems: [],
      message: 'No items on your list - you\'ve got it all',
    });
  }

  render() {
    const { buyItems, message } = this.state;
    return (
      <div>
        <header>
          <h1>Shopping List</h1>

          <form ref={input => this.addForm = input} className="form-inline" onSubmit={(e) => { this.addItem(e); }}>
            <div className="form-group">
              <label className="sr-only" htmlFor="newItemInput">Add New Item </label>
              <input ref={input => this.newItem = input} type="text" placeholder="Sausages" className="form-control" id="newItemInput" />
            </div>
            <button type="submit" className="btn btn-primary">Add</button>
          </form>
        </header>
        <div className="container">
          {
            (message !== '' || buyItems.length === 0) && <p className="message text-danger">{message}</p>
          }
          {
            buyItems.length > 0 &&
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Item</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  buyItems.map((item) => (
                    <tr key={item}>
                      <th scope='row'>1</th>
                      <td>{item}</td>
                      <td>
                        <button onClick={(e) => this.removeItem((item))} type='button' className='btn btn-default btn-sm'>
                          Remove
                          </button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="2">&nbsp;</td>
                  <td className="text-right">
                    <button onClick={e => this.clearList()} className="btn btn-default btn-sm">Clear List</button>
                  </td>
                </tr>
              </tfoot>
            </table>
          }
        </div>


      </div>
    );
  }
}

export default App;
