    let arr = [1,3,5,6,2];
    lo = 0;
    hi = arr.length;    
    let key = prompt('enter key');
    key = parseInt(key);
    function rank(key,arr){
        while(lo <= hi)
        {
            mid = lo + (hi - lo) / 2;
            if (key < arr[mid]) {
                hi = mid - 1;
            } else if (key > arr[mid]) {
                lo = mid + 1;
            } else {
                return mid;
            }
        }
        return -1;
    }
rank(key,arr);