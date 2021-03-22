import NgComponent from 'ng/ng-component';
import UserPermissionsService from 'admin_app/UserPermissionsService';

import template from './leaderboard.html';
import './leadrboard.css';

export default class Leadeboard extends NgComponent {
  static selector = 'leaderboard';

  static template = template;

  constructor() {
    super()

    this.userPermissionsService = UserPermissionsService.getInstance();


    this.selectedItem = null;
    this.leaderBoardItems = [
      {
        id: 'item-1',
        name: "Model 1",
        metaInfo: {},
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
         et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
      },
      {
        id: 'item-2',
        name: "Model 2",
        metaInfo: {},
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
         et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
      },
      {
        id: 'item-3',
        name: "Model 3",
        metaInfo: {},
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
         et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
      },
      {
        id: 'item-4',
        name: "Model 4",
        metaInfo: {},
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
         et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
      },
    ];
    this.showAddNewItemForm = false;
    this.newLeaderBoardItem = {
      name: '',
      description: ''
    };
    this.newLeaderboardItemError = null;

    this.removeLeaderboardItem = this.removeLeaderboardItem.bind(this);
    this.toggleShowNewItemForm = this.toggleShowNewItemForm.bind(this);
    this.addNewLeaderboardItem = this.addNewLeaderboardItem.bind(this);
  }

  onLeaderboardItemClick(item) {
    this.setState({ selectedItem: item.id })
  }

  removeLeaderboardItem(item) {
    const newLeaderboardItems = this.leaderBoardItems.filter(lbItem => lbItem.id !== item.id);

    this.setState({ leaderBoardItems: newLeaderboardItems })
  }

  toggleShowNewItemForm() {
    this.setState({ showAddNewItemForm: !this.showAddNewItemForm });
  }

  addNewLeaderboardItem() {
    const { name, description } = this.newLeaderBoardItem;

    if (name && description) {
      this.setState({
        leaderBoardItems: [
          ...this.leaderBoardItems,
          { id: name, name, metaInfo: {}, description }
        ],
        newLeaderBoardItem: {
          name: '',
          description: ''
        },
        newLeaderboardItemError: null,
        showAddNewItemForm: false,
      });
    } else {
      this.setState({
        newLeaderboardItemError: 'You need to enter both name and description'
      })
    }
  }
}