import { connect } from 'react-redux';
import AppView from './AppView';
import { mapStateToProps, mapDispatchToProps } from './AppMapper';

import 'carbon-components/css/carbon-components.css';
import './App.css';

export default connect(mapStateToProps, mapDispatchToProps)(AppView);