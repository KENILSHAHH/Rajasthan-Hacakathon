// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.9.0;

import "./Roles.sol";

contract Thirdparty {
  using Roles for Roles.Role;

  event ThirdpartyAdded(address indexed _account);
  event ThirdpartyRemoved(address indexed _account);

  Roles.Role private thirdpartysList;

  constructor() public {
    thirdpartysList.addRole(msg.sender);
    emit ThirdpartyAdded(msg.sender);
  }

  
  modifier onlyThirdparty() {
    require(isThirdparty(msg.sender));
    _;
  }
 
  function isThirdparty(address _account) public view returns (bool) {
    return thirdpartysList.hasRole(_account);
  }

  function addThirdparty(address _account) public onlyThirdparty {
    thirdpartysList.addRole(_account);
    emit ThirdpartyAdded(_account);
  }

  function removeThirdparty() public {
    thirdpartysList.removeRole(msg.sender);
    emit ThirdpartyRemoved(msg.sender);
  }
 

}
