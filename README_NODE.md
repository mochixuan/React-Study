# StudyFollow

## 1.��������
``` html
1. npm install xxx
(1)ͨ��config����
npm config set registry http://registry.cnpmjs.org
npm info underscore ���������������ȷ�����������ַ���response��
(2)������ָ��
npm --registry http://registry.cnpmjs.org info underscore
(3)�༭ ~/.npmrc ������������(������д�����´��õ�ʱ�����û���)
registry = http://registry.cnpmjs.org
���ﾵ���ַ��http://npm.taobao.org/

2. node��������
nvm node_mirror https://npm.taobao.org/mirrors/node/
nvm npm_mirror https://npm.taobao.org/mirrors/npm/
```

## 2.node
``` html
�л�node�汾��:		nvm use x.x.x
��װָ���汾��node:		nvm install vx.x.0
```


## 3.Error
```html
npm install -g n��������ʱ��֧��n����
```