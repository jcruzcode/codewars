/*
===== PaginationHelper (5 kyu) =====
For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant. 

1) Parameters - Constructor will take in an array of values and an integer indicating how many items will be allowed per page. The type of values in the array are irrelevant. The number of items allowed per pages will be non-negative.
2) Return 
    itemCount - returns the number of items within the entire collection
    
    pageCount - returns the number of pages
    
    pageItemCount - returns the number of items on the current page. page_index is zero based. this method should return -1 for pageIndex values that are out of range

    pageIndex - determines what page an item is on. Zero based indexes this method should return -1 for itemIndex values that are out of range
3) Examples - see test cases
4) Pseudocode - see comments
*/
class PaginationHelper {
  constructor(collection, itemsPerPage) {
    // The constructor takes in an array of items and a integer indicating how many
    // items fit within a single page
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
    this.numOfItems = collection.length;
    this.numOfPages = Math.ceil(this.numOfItems / itemsPerPage);
  }
  itemCount() {
    // returns the number of items within the entire collection
    return this.numOfItems;
  }
  pageCount() {
    // returns the number of pages
    return this.numOfPages;
  }
  pageItemCount(pageIndex) {
    // returns the number of items on the current page. page_index is zero based.
    // this method should return -1 for pageIndex values that are out of range
    let count = this.numOfItems;
    const pageItemCounts = [];

    while (count > 0) {
      if (count >= this.itemsPerPage) {
        pageItemCounts.push(this.itemsPerPage);
        count -= this.itemsPerPage;
      } else {
        pageItemCounts.push(count);
        count -= count;
      }
    }

    return pageItemCounts[pageIndex] === undefined
      ? -1
      : pageItemCounts[pageIndex];
  }
  pageIndex(itemIndex) {
    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range
    const lastIndex = this.numOfItems - 1;

    return itemIndex > lastIndex || itemIndex < 0
      ? -1
      : Math.floor(itemIndex / this.itemsPerPage);
  }
}

// Test cases
const helper = new PaginationHelper(["a", "b", "c", "d", "e", "f"], 4);
console.log("Page count: ", helper.pageCount()); // should == 2
console.log("Item count: ", helper.itemCount()); // should == 6
console.log("Item count on 1st page: ", helper.pageItemCount(0)); // should == 4
console.log("Item count on 2nd page: ", helper.pageItemCount(1)); // last page - should == 2
console.log("Item count on 3rd page: ", helper.pageItemCount(2)); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
console.log("Page item belongs on: ", helper.pageIndex(5)); // should == 1 (zero based index)
console.log("Page item belongs on: ", helper.pageIndex(2)); // should == 0
console.log("Page item belongs on: ", helper.pageIndex(20)); // should == -1
console.log("Page item belongs on: ", helper.pageIndex(-10)); // should == -1
