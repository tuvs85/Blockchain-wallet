import React from 'react';
import {Grid} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));
const rewardList = [
    {
        name: 'ETH',
        address: '0x1DE7C0DEfEAB103Aad3dc72156410A7489af54E0',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEv0lEQVRYR6VXfWxTVRT/nffW1321w+HE/4xExIhuSEQk0A4xkUWnMXELdN1Xli2KwWVTPjR+xYQFnQJuKBgHE7aWEfkLxY8YFde5aXDZGDg1Gj8iKsyhrF0ZXde+Y+4rnSt0fdd4/3p593d+53fPPffccwmSY3np6QzNYisGqQ4GCgCeD0YeCCqAMYB/BegUGD0Rld7t67T9KUNNZqC7XOOLoirXM6OaAM0MPz1P5CXWW7q9OV+lskkpoNAdaGZgk7TTpEBu9XntDQBxsumkAhzu8ZsJvB/A0v/nPG7NA4qiVH3Wafv6cr4rBBS6AstZwVEAuWbOc2wEQTA2nnRxl5ufB6HY57H3zZxIEGDst8I+GeeCpKEq3eB69UDITGt8/ryqk+NYl204/mOGACanO9AP0BIZtvyFKnY9m2lA67dOYOi7qIwZQOj3eezTWzstwOn2twBUL8cC7HwqE0sWiRMIDAxH0bhtQtZU4Lb7vPaN4sMQUOj2L2XQcVmG+1dbsLEmFv742N4ewjufTslSAFDyfd7sU4YAp3vcC3CZjHV2JqGjOQtz5yTm719jjMrNFxCckEpIcSj3dh+019HdruC8KUU/K+NcYDaUW1FalLweHf4wjNc8k5JUNJWTlT2HHOWBWmK0yVgtWqBi9/OxxJttPPrCBIZ/kExI6OvIWRY4AEKljICXN2fgjvy0lNDjJyPY1HxRhk6k4OvkLB8fAPNtZhb3FlqwpS4x8WazeakthPe7pRKyV5z9cwDmphKQkU448GIm5l2tmOk05kfO6ajaMoGLk6YJ+YcQIDYsJfN6lxXr7pO/CIWIQ++FsafLJCEZEVMBeblkZH1JkQZVLgCIRAFRF775MYpfftNnj9olAd8DWDAbSlWB1XdacGGCDSHx6jcb/uO+KYgceGiNhq6jYZMtI7EF/kGAFqdCCqfC+d7Dk1hWkIayYg22rMRC9Lef0dwWAjPgKtbQ0hHCT6dTrD7msJcc7kAHARVm2VVTYkXVgxo6j4SNldVXWlHksBhmb38QNvZcOBZC3zg0KbF6Ycm7hYA6At40EyDmW5/JRMFNKn4f0Y1onBllhKcYC69X8fBaK+bYCYPfRtHQJHcxMbOLVlUHr9Wn9DMyAm64TsG+pqxpqK8/glw74ZYbY7eiGGsbL+DsqGnoBTSqhEOxG6WwzN/FROtkRJSs0fBYhTUpdMdbIRz5RKoAiXt4n89jrzUErKzwL1N0+lJGgMBsbciA4/bEkvzFiQiefEW2BAM6RRd/7rlq6N+GpMy/C0QbZERck0to35aVcBIeeCQIf9C08hn0RNjZ7bE/bnzHHZaWsjqiBfsBTnkk4/h7Vljw9PrY3dC0J4SPeiVDzzzoO5gz3fYlHGaHK5hPii6a0hyZSGyuTYdoUJ5rlQ59gPWIo6cr92Sc/4q2fJUrsFKPteWmIqwaYNUIAanQc4CIirs99p6Zi0v6MHG6g7fCeJiwVIdsGi3mQeZo9cyVzxqBmWSF5YEdzGg0dZACEEs42xP/6Wk2k29lebBAYb2eYTxOpe5DFqcM2K+S0nrMkz2UagGmr+O48YqaUVtaWCsGFAczFwCYDyDv0vwoGD+TQicAvSeihY/2tueNy0TuH/uEpv/Mb2ViAAAAAElFTkSuQmCC'
    },
    {
        name: 'BTH',
        address: '3MCitSBfq6gjXpWSkfGCGhTom14TCghmtm',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFK0lEQVRYR61Xe2xTZRT/nXvXuY22PBJI9D9RIyRkIxkPCbRbjDFKRqIkEFgLGaBTUZGHBjEahYBGxecEx8MAaTtEEhMcoAkGu5aH4DaHAjOIEgFFGNKs3cq2tveY7177vr29BL9/bvJ95/E753e+c75LMLmmL+6xlQyV1imAg5iqAIwFMBqADCDEwEUAP0lAkCxSq3+n9W8zpqmYUG19aKJC8vMMNBAgFZNPnjNoN1j5MNgy/KSRjgEAJqer732Al5t1qifH4KbgffbleIMUvXNdADPcoSqJpZ0ATbwd5yld5h8lWVro99hO59rLA1DjDjuY+QBAtv/FedpICIS6gNd+LNNuFgCNbylg1nmb14au7gS6uuPY8eUQRo8i9NxgI9whSYo7/Z5RqUykAFQ3smVYNNIORqWZyIdVEA5utaqiS17px/mLCl59pgw9IcahozH8fkmXcgDcGfDZJwGkIk0BcLp6NwG01Mj5msYyjL9XRrA9jmv/KFi5qEwVr3FH1G9rsxV2K2HlW1F0nEkUNsX0UaDFpha3CqBmfngaS8jiRk97RUMZaqeUYIQ9zVyol3HoWAyHjsaxbX1FFiCjYCRJmez3jGhXLTldvXsAmmsm9ULmwFYrrBUaCFEDE8fLSCQAWQa6f0vgzeYBXLxSiIL/vDD7Ai3D3TR9Xv9dspz406xzEf2+zRr3yfRX3i+japwM8Z1SWaLu7/fH8O72AUOzXEpjyOmOPAXmZrMAZtZYsPpJjXtRaIvW9GepNswuxaLZd6h7/hNxvN50s6BpIiwWALxgdpkFsH55ORyTtCi9Xw1h2xeDearieibX48/24Uav/tVkxg4B4BSYTV09YfTwLpvKtVhL10Zx5tf8as8E8MKGqFoneovAHeR0hUMARpjJQC7/6zbdxJGOOAaH0tqZFIhd16p+XL5aoCAZPQKAYevKBPbYQxaIq5i7LlxWcPqcFuWsBy2pY9GQ1n9qWIixWwLw3svlmDRB47/zbAJH2uOYWiVjapW2l5nqb4/H0Ho4ViyxKgDTFGRyu/GzAbR+pzkQ3W/2wxa1+kUfaP58sCDvOYiukdMdPmWm/+fy/+gTfYgOZLMnWvUjTo2CzS2D2HMwozj0csFopxpX2MOAu1iuMvnvjzJmNvblqcyoLsGGFeXq/qUrCtwvZfeIXAX1GtbURxqZeIsegJF2wotLytB5JgHn5BK15Yp1sC2Gt7flF1fuDUgOqULBKQoWk8Pdfydx4i89oXFjZWxZpw2YzLV640183xXP28+sEXFYDICkYLQ2Dd2R3cw8rxBSwb+YgrlX8OdzCXSc1oDMnVmKirL0lNy6ZxC+1sI1wIAn6LMvVDVqXb0PKKDjRnWQTK/o76L9iqu3bKHW83PX3m+G8Ik3v0VnyjHJ1UHvsM70g6S+twlEzxUC0by2AuPvkdXhIkCkAJ2Mqy8g8RyTZVKfZ+f/MB7FRPigzWtfKXylAMyZw/LV0nB7oZeweG6JqGc9rVV/EpBn3xC27zWONieoHwI++5TkXtaj1DH/RiVJJW1mZkMSUONrUVzpKfL4SCO4DomcAY+tWxeA2HS4wtMJ2G8GhFHN6JxdVySuO+IZfiLzTPfHpHZBZAIryk4GVd+ik0LiJyQFDf7d9l9yBQz/DZ2u8EYAq24HBAPvBH321YVsFP85XRCZkFB4GQENANKz1hAVDQC8i0EfB322s0aiRQEklafN4fJSS18dCA4GxO/53WAeo54TXQP4AkBdTAhYR1r3f91Epq7Gv0sK/Tc6Y3ktAAAAAElFTkSuQmCC'
    },
    {
        name: 'USDT',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAD/UlEQVRYR8WXX2xTdRTHv+d3124Ctysoi8MYRKIJEWRGzUK23U4fNCbzhWSIuyWbJk5iImo0+sCzTyJB1MTFRKpbQTFZYsAYI8i8lQV1REdEYogErSBGZ9t7O3Tt7u+Y263Qdre9nevkPjX9fc85n9855/ePUOW3qZuv8/vSXQypgWgjgDVgrARBAVECLOMEOsVAjP10KLZP/aMa1+Ql6txmrbcl7yBQL8B+L31+nIAhwcqeY/uXnqxkUxFA05O7APF8tUHddbTHiKrPlfPhCnBfr3WHbXMEjHsWFnzWmjHGRL2xqPpDqb85AB262UbgwwAFaxL8qpMJAe4aiTaeKPRbBKDp6Q2ANADUOng+5gQEdRiD6pmCXpn52d19UPm9/qFvwHxXfvCxzVX3XMVk7RvOFI5/bUQDrXMAQrq1l8FPFypf27kELeuUBVUiMjyFEgAw5CuxaPBFx3GuBO3bUq1CUlFtnP8XC8Dxbcvs+uMHrj+dAwiFrQPMvLV0qosJANCAEVW3U0d4spnYvuiW50rpd+AKv2devly2VN+dseeOMaaEXw1SqMfqZ+KB+Rb6iyG1yCQUtubrAgzqppBuDjIQ9rJuVAk33iCwIkhYHiC89ERDkcnA+1OwJhnmJOPHcxKX/pReLsHg10nrMcdBuNNN/fD9PjzQ5sPwZxkkTcYvFyUmkpxbGaUlKMxAUKUcaP8j9TgyOo0jo9lyMAZpeirhtus5KT70eRa73vlnjrEXQKGBs5f0ba53Gt0FguKk6Sa74XW21uHBdl8u3R8dzeKnuETKZCQtiXVrFdx6s4K/UjNpblohcPCTDOr9gFOq5QGB1TcJ7NzegJGvpvHpl1mMfjvt2ohlAfLqJQ2E224RuH2NgtXNAs1NAquaCMyAmZ5hDywjSAnEL0nEf5M4f0Hi7HkbZ3/26APGlAOQ+C97fy1WAYBfSQtb42B2bcJKbVwjgJgDMARm3XPNlAhqAsD8hgPwJJjfuhYAxLSF2rZOrlIU+8I1AMhmM2pj7jDS9NQHAG2ZD8RCS8DA27FooH/mNHzU3MQCo/8ngBC0YWRQ/f7KlUzTU28C9FS1EAvMwKtGNPCCE+sKwN397Ft62RoDu58LpWB9Jde1SPG1q/w8CGPGUODevKDoUtrZk2iRJAyAis/aatPirUsqddR+7F31tCtArh/CZgczf7wIEEkGumLRwPFCTteHSXs4sVGwiADU4j0pbwWBTpJAn9N0peoKTzMmTU/vBvhZ7xDlFczYHdsfKPu8836c9qRbbMgdBPSBrjatB5QNQoSF2Bt7b9mpSlpPgLxx2+Os1mUmu5htDZh9ngMrZ8edp/g5Zh4HhKFk/z488mFTuprM/Qv9GI3dQ1nIygAAAABJRU5ErkJggg=='
    },
    {
        name: 'ATOM',
        address: 'cosmos1zz8vjcacr28ykhfg7k5vk0d2mmfj6pg2qau9th'
    },
    {
        name: 'TRX',
        address: 'TYg4cWXQGP7RnnizSZEXtqmNnsydi3BxbP',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFKklEQVRYR81Xa2wUVRT+7uzuTHfLLpZH6ou20BSpxigxJhLCNgpqoha0BYq7FKkotZD6IsozxWA1Ila0DQ8DwQotrwIRRMTaJnabxkoIgiEh4UexgDykWnf72Nnd6VxzZzrb3e3M7vL44U0mOztz7rnfPec7535DkOSY+uoNuzkgzKCgRaCYCMKNBjBmcHoXqPw3CM4TkH2SEGhq2zG2JxnXJJGRs7gnl1CUUyrPA0haInv1Pe0mhNtLCWo8u+zn4s2JC8Dp9lYCpByAI7mFh1n5AFrjqR+5xmi+IQCn2+cBMO0WF46d1uqpdzj1fOkCcLp9NyLye4cwoMtT7xgb62wYAKfbdwFA1p1aNcbPH556x/jIZ1EAnPN9+0ExhxmsKk3B5WsyLl+XcekaVe79Ir19XAQNnjrHXM1RGMAg4VZrL9z5PEoKBVzvkpFqIxADFBevyIOgVEDsuvKXfAug6EcaMRUArNQg0/ZItgs80LjDriwwdhSHlVV+ZGdwyB7HITvDpNyz8ed1WQHWeVX9Va6rMrw9caPlA0eeYCWqAMib37OZUloWu5WKpSmwpRDYrASPTDJh/TYRx1pCitm4ezg8kGXCxPEMkAoqzTGU0cotIn5qU2112U/IlpY6+xIyY84/I4O8uRPAyFjDnCwO2ytT4VrWh0WzeUyfYsG+Y0Fs3h3QdZr/pAWLiwQcagxiYYGADdtFHP3ZEISXD0qZJM/lLaaE7DRC+s36VLSflrBlTwBlLwuY9zyPH1tD+PgrMWrKa3MEuF7gUb1LxLdNISws4FFSIKB6ZwAHG4P6UaB0AXG6fAdAUGgEgO36zQUCZpX1Kiazn+VRXiyg/YyEjbUBSBLFG/METH7QrCzeckIKuyop4JVIbNsfQN0RHRAUB4nT5T0FQiYbAdDI+Ol2Ed8PhjPvcTNWlqag84oMSQJ4Hmg4HkJOJoecTBNY6kbYhvhw4HgQNXU6aaP0N+J093QCNCNeLbG8PjzRhPIP+8NmudkmpVdk3KtWAxvdPooLl2R0XB5AxyUZ82fyyv9VG/1GVLzIAPQB1BYPgEbGpev6cfb8QNiU8YP1ieZ2KbwwiwgbVcutSLuLQ8UXfqWZGdRCf1IA2OT171nR1U0VZmvju60j0NgWQs2u6PC+W5KCp6easbZaxInfhzgxHARRACRMAZs4fYoZKxZbUVjeC1+v2mRa6uzYWKuyXhusSli1fP61iMPNxn1AtScXE5JQc8zIWF81Ag0/BJVeYDEDTbV2LPukHyfPqmlh5Fz3lhV7jgaxda9+r4iKgkpC716AFMXjgPaO1fa0xyxYtLoP6aM57P8yFXPf7lN48FCOCTVrbGg9KWFtjRHpYleh+0ie2/cSBQ4lA0Aj44oqP/71UVStsOK513tx9xgOG5Zb0e+nKK0YqpREPglQQJjYNAX4zmT1HjsfAILmX0J45UUerDIq37Eid4IJSz7oj8P4YbvvHhCCmXEPI70dMDJWLLXisx0iHp1kgl8E8p+y4P0Nfvx6Jh7jo70R7TBij/WOY6PwMTJuqrCh7ZQEVguJ+r2Bn+jjWAGhKuCwIImXP0bGZ6ZacF86pxw07MC5uREjSLTJySphRkYWhdPnBpTQ3+SIUsh6ojQpRczIuG5T9JGcBJBhythIlidUxvenczfBeAXaMEWs9EIj1JEKOYmdxTeJUcKRxv/fT7MwMcMfp9SlpxsNtu4lhOy+7Y/TSOdMvIYsppkUZBZAJ+h+noN0ENDDltDAkaaGUd5kUvcfOQg2IOtA8IwAAAAASUVORK5CYII='
    },
    {
        name: 'CKB',
        address: 'ckb1qyqdqu9647q5e3fcdhld6rvdk4npmcjc3puqt4hw0y',
        icon: ''
    },
    {
        name: 'BCH',
        address: 'bitcoincash:qpc035fs4th647ck9srazg4253aw8npvtsds4lgs2d',
        icon: 'data:image/png;base64,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'
    },
    {
        name: 'LTC',
        address: 'LQWR7EBJ9iLn3UBziEHynHE29sRNu1SQ3n',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAD/UlEQVRYR71XXWibVRh+3u9L+pM2qYo/pRe7cAoqrFU6wdkmmROLjA5xMGmaQF2VVmeVTFDBH1z9uxiim7SbIkoZqVsZzIvphWMXadMNEcVlQ4bIECd1F5Ol+Zq2S5ucV87XJc235UtO085zUSjf+zzvc97zvs85ISiuzTu4PutMdQLCR0QtAO4GcAcAHUCCgIsAnwNzTGjO47FI3SUVaioX1B5KtWgsXgHQcy1ZOYj5nYiOEIv90dGGH0sBSgrwh4xPmLFbKaNdENHQXen68NGjlC0WUlSAN3ClmUgfAdFDq0qeB9MZFtQTO1x/9nq+GwT4Q4aXGd8B8KxN8jxLUhPojB72TBbyWgR4A6lm0kTsJiTP5Uyy0HyFlSgQwOTrNn5Zu7IXrx8D8cYFd2uuJ/ICfMHkpwCFVcr+wD06Du5xWUJ//zOLvnfmVOByRIYmIu6XzWmRfzZ3Jx4UpP+qhgZ2PFmFgVC1JfzYiQXsP5RWpYAG3iRH1BTgCxpfAehVRb87UIstjzgs4e8fuIqTpxdVKUyfGI+4A9TWe9mtp6unAWgq6NsaCAcHXWi8fTl8dp7x3JtzuHRZqFDkY5j0JvKHkgFm+kYV6d3owAfhWkv4T2czeG3vvCrFsjuw6Cd/aOYAM7+oiu7vqkZ3Z5UlfORYGj9MZtDR5sDItwuqVCBwhHxB4xSAR1VRn73tQst98v5ZXucvZHH/eh2zc4ytfSlVKhAoLgXIW6tRBbV+nYYv3quD09p/eejeL6/i+3H1RgQwLQVkVG65Kifw+vM1eKLNadH615TA4NA8Lvy9sgbMkUgBXGr30nS2+pzYtsWaOIeRsy89oNIlBSQA3GJH0N7qwIe7l7reSDE89db7S7qfdMEKV4J8oZk4mJtLCVhcBAQDH79hHb8V2W+RBATEpYAImIPldrBzexWe3b46+70+BwERKaAfzJ+XEyB3//CGG+3330Tp5jtz3v54iKmf2rpmm3Q9O1VKQNOdGr7+yIXamrJPSAvN0y+lcCVp3+OmFUuEL5gcA+gZOxEd7U689UJNuSJZvqcXgI7emRIYHpsYbegyBfgDxibWcNou+tWdNXjq8eJjaIf57Y8sdg3avw8s1/G1KgwDtGtF26w4mIcnRhsGJDx/qK197KxLzfwMgu1IVpyvAGiO3pR7YzRK0oGXBch/HgulWrIsJm7eo5QNQcI3Gbk1ntP0Pz7L2SCizvGIR76686voXJmVEOLQWh2HvHazlOkp3LltBXIfzJ6YNfatvjF5WLvXE47uWTrzIm5YurWWRpTDpXyiOAONadD3RUddlf84LSQ2HdMhtgHwAtgA5nUFt+g0CBch+Bw0jmUzzuOnjtT9ozI1/wEjfWd8FGEAPQAAAABJRU5ErkJggg=='
    },
    {
        name: 'KSM',
        address: 'G4S6ShMQdqtrWkRfoMrPiLexwTv1QV6SjfrmpUEjtYtvN8d'
    },
    {
        name: 'DOT',
        address: '14V7aTcYe46SYPwVrjboduoofyBKu3E44rZbYTBdpBMvMrZy'
    },
    {
        name: 'FIL',
        address: 'f1ir7z37hgon6kl2mhg6dpmovozs42rcpvzwwbsqy'
    },
    {
        name: 'XTZ',
        address: 'tz1fkcTAZrhtvToEnWCBoqCzD8zf6ayDotTc'
    }
]
const qrcode = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC/ElEQVRYR+1XsW4TQRB9s+d8B0aiJ38Q09npU1FwaZASgZQq2FWcyoYGJIINFU5Nkwq7i/0BSOYDIkJNQx/fDpo91mx29467KIgmV9m3u7Nv38x7O0fpODsCqIXYw3o02W98io5VfJmOVjsgtR+dTvoHpWN9DmTHsQmTvY15xX1Kp6Xjq/gBoc7XAG5rs6qAc1B3AAoY6AyzNwA/LKaTvk67ycH2K96UOZ8PadkerFIiPClLwbTbeGTHS1PQGazmUHTGWi/9gASVAtyc9hotMw+A/N4eZH0Gmgw9CdYotQnG62k3oRDAaLXjS00CM7g/623M24M/FSz/8424FQNg2OglfXeN3ZBInbsA5L1YwBqRi9oF0BlmbMckwDUAJlWASccg61sAnaFIm430mLWhPQbAvI/lrCoAd+1/AeDXwD9hwGfITYFUvozPeo2Jy4C/RmqidgqI6JsmXAYVzdwCg6QIfQBMvMVEgX0rFnUg9YuwsAYksAI1izStwZdyajcFckoFVeD5eSRRSCjrquZdMs9snjR+iiHVDRdXQcQJmXFqTm0kJtJTa1czUmVeSFpkzPeOMoDFADi3WfswMKkCwPUN8QAxLx+gGzcKoC6N7gbtl9LgAMToWwC1GRBJaYW1AwaAtF6sbVqpLdK4z+C5MGRTILKzAMoOVJQCBuOUEMpQ7gECzaWijScQjvyNwhpYpVB0b/YiCTqvQgBF6F3DsQAImGjmhWXAP7GRK9FWZR+QnLqXiA1oLyOraQvAjDsqqFNDpQyYYiJlZJdLL78NfQA+W78PcDzrbZi5tVVQl4E1W0kjL1wtIGkJpc6mh7QoBSB9e9CQOClw6bQNSYwByxazNie36RHWigCk76760bZcFhBwwEqFLZnWKRjfXRUAWAJ8wcwnCvSACY+R3yVNgOfmw8erkb/3hCWVZF0xVoT26g2W1wFQp4pvOvfuw+QaA5RQ0ChwtqLb+l4s/TjdfZ99YMbTWC4JeP5xLzm5aZ5l3e44e8bA24IYX34BDJvL5H/qFHAAAAAASUVORK5CYII=';
export default function Reward() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <p>如果你觉得这个工具帮到你了，</p>
            <List component="nav" aria-label="main mailbox folders">
                {
                    rewardList.map(item=>{
                        return (
                            <ListItem >
                                <ListItemIcon>
                                    <img src={item.icon} alt=""/>
                                </ListItemIcon>
                                <ListItemText primary={item.address} />
                                <ListItemIcon>
                                    <img src={qrcode} alt=""/>
                                </ListItemIcon>
                            </ListItem>
                        )
                    })
                }
            </List>
        </div>
    );
}
