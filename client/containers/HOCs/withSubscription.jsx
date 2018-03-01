import React from 'react';
import PollStore from '../../stores/PollStore';

function withSubscription(WrappedComponent, selectData, fetchData) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        data: selectData(),
        isLoading: PollStore.isLoading()
      };
    }

    componentDidMount() {
      PollStore.addChangeListener(this.handleChange);
      fetchData();
    }

    componentWillUnmount() {
      PollStore.removeChangeListener(this.handleChange);
    }

    handleChange() {
      this.setState({
        data: selectData(),
        isLoading: PollStore.isLoading()
      });
    }

    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return <WrappedComponent data={this.state.data} isLoading={this.state.isLoading} {...this.props} />;
    }
  };
}

export default withSubscription;
