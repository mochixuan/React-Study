import React,{Component} from 'react'

/*----数据存储----*/
import WAsyncStorage from './components/db/async/WAsyncStorage'
//全局变量的声明，一次就好
import './components/db/async/WStorage'
import RNStorage from './components/db/async/RNStorage'
//import RealmTest from './components/db/realm/RealmTest'
import RealmTest1 from './components/db/realm/RealmTest1'

export default class app extends Component {

    render() {
        return (
            //<WAsyncStorage/>
            //<RNStorage/>
            //<RealmTest/>
            <RealmTest1/>
        )
    }

}