pragma solidity >=0.4.21 <0.7.0;

import "./Ownable.sol";

contract HashStorage is Ownable {
    mapping(string => DocInfo) collection;
    struct DocInfo {
        string ipfsHash;
        string fileName;
        string fileType;
        uint256 dateAdded;
        bool exist;
    }

    /*
which is emitted every time a new file hash is added to the collection mapping. The event includes the IPFS hash, file hash, and date added as parameters.
*/
    event HashAdded(string ipfsHash, string fileHash, uint256 dateAdded);

    constructor() public {
        owner = msg.sender;
    }

    function add(
        string memory _ipfsHash,
        string memory _fileHash,
        string memory _fileName,
        string memory _fileType,
        uint256 _dateAdded
    ) public onlyOwner {
        require(collection[_fileHash].exist == false, "[E1] This hash already exists in contract.");
        DocInfo memory docInfo = DocInfo(_ipfsHash, _fileName, _fileType, _dateAdded, true);
        collection[_fileHash] = docInfo;

        emit HashAdded(_ipfsHash, _fileHash, _dateAdded);
    }

    function get(string memory _fileHash)
        public
        view
        returns (
            string memory,
            string memory,
            string memory,
            string memory,
            uint256,
            bool
        )
    {
        return (
            _fileHash,
            collection[_fileHash].ipfsHash,
            collection[_fileHash].fileName,
            collection[_fileHash].fileType,
            collection[_fileHash].dateAdded,
            collection[_fileHash].exist
        );
    }
}
