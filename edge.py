
key = input("enter your value: ")
a = [1,2,3,4,5]
def rank(key, a):
    lo = 0
    hi = len(a)
    while lo <= hi:
        mid = lo + (hi - lo) / 2
        key = 2
        if key < a[mid]:
            hi = mid - 1
        elif key > a[mid]:
            lo = mid + 1
        else :
            return mid
        return - 1

