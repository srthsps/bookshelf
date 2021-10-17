import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dashboard from './Dashboard'

configure({ adapter: new Adapter() });

describe("Dashboard Testing",()=>{

    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<Dashboard />);
    })

    test("Section Heading",()=>{
        expect(wrapper.find('h6').text()).toContain("Dashboard")
    })

    test("Section header breadcrumb",()=>{
        expect(wrapper.find('.breadcrumb-item').text()).toBe("Welcome to Bookshelf")
    })

})
