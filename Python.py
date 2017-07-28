class A:
    def __init__(self):
        print("__init__")
        super(A, self).__init__()

    def __new__(cls):
        print("__new__")
        return super(A, cls).__new__(cls)

    def __call__(self):
        print('__call__')
    

A()

#__new__
#__init__

