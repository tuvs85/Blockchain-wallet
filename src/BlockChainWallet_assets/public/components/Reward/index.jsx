import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import QRCode from 'qrcode.react';
import ClipboardJS from 'clipboard'
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import './index.css'
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const rewardList = [
    {
        name: 'ETH',
        address: '0x1DE7C0DEfEAB103Aad3dc72156410A7489af54E0',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAwFBMVEUAAAA+W/M+W/I+W/I9WvI9WvI+W/I/W/JAWvM/Xu0+W/I+W/I+W/M+W/I/WvI+W/M+W/M9W/I9W/I+W/E+XPE/XfQ+W/I+W/I+WvA+XPQ+W/I+W/M+W/NVVf8+W/L///9MZ/PO1fysuPpgefRGYvOotfmImvft8P7By/uXp/iMnfeElvd3i/ZSbPPy9P7o6/3R2PzJ0fvGz/u2wfpsg/VpgPXv8f7k6P27xfqisPmgr/mSoviAk/ZwhvVnfvVWcPQeedxXAAAAHnRSTlMA/M7tLvmcjSsL8cWVkjvlpaFkWTUX58tWL9rPwQPztfPfAAABQklEQVQ4y32T53bCMAyF5SQEwt6jI8oi7LK7x/u/VRsgusac0++XdK/s2JJDwBvWHhoFZVutdo9uKbkFHzS7pl/0DWrXywf+DVYJft0WOQgktOuyHr4fRYjtfA8L2oH5gGxw9ms+CJlDLS1mflcT5vzHXBMcImoiDSZZwSSA4hL1fBDxiQhKwaM2siNfOEIbUgvJNi/YQqtqd0xZSEWskDQpWaNgneRqg1QejlljLKeUgtVVQRpLwd0lUotlmNuvyUw+gUN+7eLZ06lRy2UY45C45ju/JXvm8SriGa6pN2rDL5/fcfqsz6ujtzpm5umGmX9EUt7VsD6YjXG6xrinmb/Tx208mFV2jcB4MPR4D2XBvEBm0RmnDG0/RVx25NmjIgng10lwMHTs7/z/6xXJYOQquMod0S1ep1rpK9WvVDse1F8dnV/jvIBkVwAAAABJRU5ErkJggg=='
    },
    {
        name: 'BTH',
        address: '3MCitSBfq6gjXpWSkfGCGhTom14TCghmtm',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAyVBMVEUAAAA+W/M+W/I+W/M+W/I+W/I9W/I/XPE+W/I+XPE+W/E+W/I9XPI+W/E9W/I9W/I+W/M+W/M+W/M+Yfc1Zv8+W/M+W/I+W/M9WvI9W/I9WvI+XvU+XfM+XPM+W/E/XPM9W/M7WPU+W/L///+erfjP1/xOafO5w/rw8v7g5P3W3PyzvvqjsfmOn/f09v7K0vu/yfuRofiMnfd5jfZvhfVhefRbc/RHY/P8/P/DzPuqt/maqfiUpPiAk/ZqgfVlfPVVbvSvu/qImvezbbXiAAAAInRSTlMA+fCR6cujLDo2MO3Rz5aLZlYpCQPixcGenGEYFNGpp6UaHDh4wgAAAWtJREFUOMt9k9d2wkAMRNehdwgthFSNDQZM753k/z8q2cVCC+TkPtg+Gsk7kmUllEv5WtShTDZebKp70g2y+Ejd6hG6IVK5Ks/RHbmE6MkH+oNM8lJv6fBcOnFG+I5KVvQlMKd2MCdD7JyQZ7XdCSYAkY8ZOzUGiPnyAfibI0CM7vaNhAHgYYXuggNxpT4tvQWADtsh0OPQiyqS8A109N0FRmHoWcVJWAOBeQDQIsOTeiVhBRw4YcadPlxb2C/PRyD0GVUk9KHp9HoA2mHMsROGgDfWF8+bECfYRwD4FVouutoAH5G9srA0Iwd2RGwyblsYmIepGQe3WQzL12OPB6iboMugmmQ4QjNlL5BRq3e2YLr0XHcAYCsfS6U42cVoMYZhw7G0vdBd7HXStL+bs144r1wuXChfJwUsysqphB4WJ51Ejz7+v/ZR6+9KxO71mq4XCqKwvxsSDUdUJy/l9u8fqVcdp1qPlMoS/QG+eG4GmzFHzQAAAABJRU5ErkJggg=='
    },
    {
        name: 'USDT',
        address: '0x1DE7C0DEfEAB103Aad3dc72156410A7489af54E0',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAArlBMVEUAAAA/XPM+WvI+W/I+W/M+WvI+W/I+W/I+WvQ+W/I+W/I9W/M7Wfo+W/M+W/M+W/I9WvI/W/M8XPU+W/E+W/I+W/I+XPM+W/M9WvI9W/A+W/M7Yv8+W/M+W/E+W/I/XPI+W/L///+frfhuhPV+kvbQ1/zH0Pxke/VUbfTk6P3W3PySo/iImvdGYvOyvfqLnfeDlvd3jPZNaPPl6f2/yPuotfmYp/hvhfVtg/VgePR6kOT7AAAAIHRSTlMAK5Tv+/jLw1YvoZoK7NHOOjYY8ufjpo+Ni2YG4qliPeMq+gAAAAEfSURBVDjLhZPXdoMwDEAV9gokNKNpOhQgbDK6+/8/1qo64AaIe1+wpYslODIIPEsxl7o2DZzHEIZMXB0Fzhx6bLDH+vJ1AwcYE5GfqTjCtCtjc35otGcEP5toAFXhvEL2ftcjouiG8nO8LiAVWckEFyDkhmKGUjGDhL6FO/wLCRcBC5xu/ZydaxLej0neBRXweXHcJx85/pYg9ys9cdwElY8+cCeiRMTPe+BtkpZ1ljdxlSQVNnl22r2euUtoizWf1SF9KcqyKNK3OqMQC6r8K5bgywUTVnJB+f9HhVJB8wAeZIJL8yYTJjwwV4VbILa+iPCstRjA2Dc4itoN/tOooc6gww4kF4dZt3HRXw/bQYHm2tCHr/9C0xamYnki+g05VGUEG0aKCwAAAABJRU5ErkJggg=='
    },
    {
        name: 'EOS',
        address: 'mnemonic1234',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAA+VBMVEUAAAAuP+4uPu4uP+8uP+8uP+4tP+4tP+4tPu4tP+4uPu4tP+4tPu8uPu4uQPEqQPUuP+4uP+4uPu4uP+4uP+0uP+4tPu4uPu0vPuwvP+0wPu4rPO4tQPYuP+4uP+4uP+0uP+7///+mrfj39/7v8P61u/mss/iepveaovd5hPRyffRPXvFHVvDs7f3f4v3FyvqyufmQmvaMlfZuefNaaPI5Se/y8/7b3vzR1fvM0fu+xPqvtvmiqveUnfaEjvV9iPVndPNWY/FUYvFJWPBAUPD7/P/HzPrBxvq5v/mBi/V0f/Rib/LV2fzJzfu4vvlOXPHm6P3Y2/ypsPi8p77lAAAAIHRSTlMA9ivf3ca/zJiUj4F2OhYG7+jlpp+KWlNSMCUdDvC3t33lzUIAAAHBSURBVDjLdVPpWqNAEMS4yeruZt31vq0BAgQhCQFy34kmxtv3fxgnQzeo+ew/9HT3R1X1oWW2c7Rd2AX+57cOz7V1O93eQGb7J1/zvyljCXJ+fUqfFSh897jokPszl+VzPyg4EaPF3KXHvyLn/3IezcjtwgBX8D+uwARsLHWUq2CUJP+H38MKsHSAdp8jBwqA5V0LAPYDAPOeK3IfBKIiw9FjtQyMbzm2JQs2ye/rAKrTWAAIbApu7GhFLm5bUPycHlBLWRxnFA1foqycmxh+CWlD95hiszrpqXjYmVTuZhQuaHnyyj1Xpxa1BvYz69jUuIv6CKKeuLE/xoBZpgUPiDsRF7u45YIUogHT7RKdvgmHIZhk2A07M5/oTJ+C0TWRZJmloZAqvcQHhDdgmUVi3pUM645C0IFl6ZUaxa1uCABeSw11CqBpUatpWLPSaPUxYyAREJkzNSwed/0t0TeQCDXl1gIet6JZEy5WGAsgmKrtNRxaGGmXqwkJ4xmAkOgAxu32mFYuW1pDzAErjCRCz67T0vLas5KhZ+le+WaunhfFtcNx/KeG2TIm6eGsn579IgJq4XfHG35zvMn559fP/x0WMHKYbIcxYgAAAABJRU5ErkJggg=='
    }
  /*  {
        name: 'ATOM',
        address: 'cosmos1zz8vjcacr28ykhfg7k5vk0d2mmfj6pg2qau9th',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAExUlEQVRYR8VXa2wUVRT+7uxOd6EvWF6iwbcWH2xp4AcR2i3GAMG0YrSioKZRmqClURJNSCWSGIwiGE1qRSM/fJK2QKMQW0QQtljTKLqwNpISpEUD0rTdht0tdF8z5tztnc7uzmwXrOn5s7Nz7znnu+d859wzDBnKgod8+dEIK1dV5REwdjuAaQCmj6j3AxiAijOMKY3DUfVwV/uMQCam2Vib7i/pv0diUg2ANQDyx9o/sj4IoEFRlbrOtumn0+mkBeAs9W1lKmpUIC9DxwnbGOBXGeq8xxybzfRNARS6BptUqBXX49hA57jX7SgxsmUIwOnydQO4dZycCzP9XrdjRrLNFABOl69PRy6+PzeHoWx5Fn8+dz6Gwvus+N4dwbmeWIK9G2+QULpY5u8OfBdGIKgm++vxuh236V8mAHC6fG0AipO13tg0GV1nY+gbUPBWrR291ZVw7PgErooQQqG4k7WP27B0iYyv9oZAQArutOD1t6+kBJGB7TnlnvqEWNAAEOGg4jWjsDfuysXqdQHMuUnCpvnfYranCVJ5FWoOLMHfFxQQQDrt9g+uaupCxzCNDG8KYnIAVGoWJnWYsX3X+zlY93KQ2/ppdwixgV7Y585D65EIf3fiZBT7D4YTfOl1DPLuj6nKIipRDsDp8n0I4AUz0pkZo5OTGIU6HYARPzu9bseLrGBxX67NajkPYKoZAHL00afDuHhJ0bZQvstXxIlJeacoCCEOrK+0GwLT+bgsy7iFFbr6H1UhNZs5p/fCkQgzVYX+hOJZsD55v5ltBvYsc5b4GsCw2mwTsZlKi4xSBBgDFhRa8eup0ROTrv7d7FkS58Sx9givHlNR1X3M6fL9BqBIv4lOuOYxGx4slrkBCi8BoFxTeMWzXofSRE4JpHheON/Ky/GH4xHs3hcy6gseAkD5v1kYIwUyQHnVM5tyTmv0SxUxFGmBZGtB9uRJCAwuRba8kqfl6I/xU9OvEAJMfYIOkBSRvwjAEIA4nQG8tzWbE84odC0NeRwUrVtyN4AxhkVF8/B711lcvvQOJx45W/mkPyXqBJ7WN24md5pcuS4AO79ogsV+EJLFolmK+utSALgekLF8WjtOWorxZ3cMT1fYDAEYpuDLPSHez4UkpyAYfhcK/oDVZocSvhc5cjWPHvFFpODnQ/nwVm/EzGXLIJeswPMvBRNKGQBPgSEJRW//xRPlRun/lm3JJAwAUhegLNSIJ0j4TWsYqzpWQZYk5JQ9h/qeh3GkbZQXIwfzZFSGoumQcaqQu++wJDQeMkaMp5MHh1ReKcSVcBhYX2lD67b92N5RytcShMowk0ZU+ZQNigJ83hji+uPaiMZqxScOT0GvtxuOgjmoeuUqOk/HGwudmNJCktyKifGi7My7EOKtmDaku4yaa8/A2lwPOSsLXxfV4ePPhjWb43IZkbV017Hn6BR0Vj0DeeYs1F7cok1BVO8UBZL/fB3zKKQZSA7tzUPZ2oA2/by6YRLngbiGKRL+gIod9aMDSdrrOHkgETE1G8nI4YV/FF7D1EyozVLe9SLKlvoHVcHcu65xJNOBSBlKaU0Qjpzr5wI9CHJMJUtCZXjNQ6kOxMSN5QLEhH6YaJGYyE8zAWJCP071BPu/Ps//BStJiw+qUXS+AAAAAElFTkSuQmCC'
    },
    {
        name: 'TRX',
        address: 'TYg4cWXQGP7RnnizSZEXtqmNnsydi3BxbP',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFKklEQVRYR81Xa2wUVRT+7uzuTHfLLpZH6ou20BSpxigxJhLCNgpqoha0BYq7FKkotZD6IsozxWA1Ila0DQ8DwQotrwIRRMTaJnabxkoIgiEh4UexgDykWnf72Nnd6VxzZzrb3e3M7vL44U0mOztz7rnfPec7535DkOSY+uoNuzkgzKCgRaCYCMKNBjBmcHoXqPw3CM4TkH2SEGhq2zG2JxnXJJGRs7gnl1CUUyrPA0haInv1Pe0mhNtLCWo8u+zn4s2JC8Dp9lYCpByAI7mFh1n5AFrjqR+5xmi+IQCn2+cBMO0WF46d1uqpdzj1fOkCcLp9NyLye4cwoMtT7xgb62wYAKfbdwFA1p1aNcbPH556x/jIZ1EAnPN9+0ExhxmsKk3B5WsyLl+XcekaVe79Ir19XAQNnjrHXM1RGMAg4VZrL9z5PEoKBVzvkpFqIxADFBevyIOgVEDsuvKXfAug6EcaMRUArNQg0/ZItgs80LjDriwwdhSHlVV+ZGdwyB7HITvDpNyz8ed1WQHWeVX9Va6rMrw9caPlA0eeYCWqAMib37OZUloWu5WKpSmwpRDYrASPTDJh/TYRx1pCitm4ezg8kGXCxPEMkAoqzTGU0cotIn5qU2112U/IlpY6+xIyY84/I4O8uRPAyFjDnCwO2ytT4VrWh0WzeUyfYsG+Y0Fs3h3QdZr/pAWLiwQcagxiYYGADdtFHP3ZEISXD0qZJM/lLaaE7DRC+s36VLSflrBlTwBlLwuY9zyPH1tD+PgrMWrKa3MEuF7gUb1LxLdNISws4FFSIKB6ZwAHG4P6UaB0AXG6fAdAUGgEgO36zQUCZpX1Kiazn+VRXiyg/YyEjbUBSBLFG/METH7QrCzeckIKuyop4JVIbNsfQN0RHRAUB4nT5T0FQiYbAdDI+Ol2Ed8PhjPvcTNWlqag84oMSQJ4Hmg4HkJOJoecTBNY6kbYhvhw4HgQNXU6aaP0N+J093QCNCNeLbG8PjzRhPIP+8NmudkmpVdk3KtWAxvdPooLl2R0XB5AxyUZ82fyyv9VG/1GVLzIAPQB1BYPgEbGpev6cfb8QNiU8YP1ieZ2KbwwiwgbVcutSLuLQ8UXfqWZGdRCf1IA2OT171nR1U0VZmvju60j0NgWQs2u6PC+W5KCp6easbZaxInfhzgxHARRACRMAZs4fYoZKxZbUVjeC1+v2mRa6uzYWKuyXhusSli1fP61iMPNxn1AtScXE5JQc8zIWF81Ag0/BJVeYDEDTbV2LPukHyfPqmlh5Fz3lhV7jgaxda9+r4iKgkpC716AFMXjgPaO1fa0xyxYtLoP6aM57P8yFXPf7lN48FCOCTVrbGg9KWFtjRHpYleh+0ie2/cSBQ4lA0Aj44oqP/71UVStsOK513tx9xgOG5Zb0e+nKK0YqpREPglQQJjYNAX4zmT1HjsfAILmX0J45UUerDIq37Eid4IJSz7oj8P4YbvvHhCCmXEPI70dMDJWLLXisx0iHp1kgl8E8p+y4P0Nfvx6Jh7jo70R7TBij/WOY6PwMTJuqrCh7ZQEVguJ+r2Bn+jjWAGhKuCwIImXP0bGZ6ZacF86pxw07MC5uREjSLTJySphRkYWhdPnBpTQ3+SIUsh6ojQpRczIuG5T9JGcBJBhythIlidUxvenczfBeAXaMEWs9EIj1JEKOYmdxTeJUcKRxv/fT7MwMcMfp9SlpxsNtu4lhOy+7Y/TSOdMvIYsppkUZBZAJ+h+noN0ENDDltDAkaaGUd5kUvcfOQg2IOtA8IwAAAAASUVORK5CYII='
    },
    {
        name: 'CKB',
        address: 'ckb1qyqdqu9647q5e3fcdhld6rvdk4npmcjc3puqt4hw0y',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABy0lEQVR4Xu2ZwW7CQBBDOfGXCOVXA1wI3BE/QzVqDsiqQxx2ZmerfdJTL052sQyX7nadTqdFhmF47ff7TeK73nmdz+fFQBYOh4Pdc6uUj4EseBeQfgnuBcymJaqA1+VyWXygFmEFzKYjuoB0SwgvwHw+n4sPR1KlAHOapsUXRFGtADPDEqoWYN5ut8UXeVO9ALPmElIUYNZaQpoCzBpLSFWAGb2EdAWYkUtIWYAZtYS0BZj3+93+upK6ANP765C+ANNzCU0UYHotoZkCTI8fxqYKMEsvobkCzJK/CU0WYJZaQroCjsfjau2gb0lXgD0cSS+gF9ALwPMVKRhUDOVfFjD/QzZCCgYVS4LvLi0Fg4rFOJ1O+O7SUjCo6AGeUUoKBhWL47gECgYVPcGzvpWCQUU3HJZAwaBiBHjmVikYVHSn4BIoGFSMBM9WpWBQMYxxHPFsVQoGFWuAd1grBYOK4XyxBAoGFWuCd/kkBYOK1diwBAoGFTOAd2JSMKhYHWEJFAwqZgLvhlIwqJiG6/WKd0MpGFRMxePxwPutuisGFdOxsAQKBhVTQpZAwaBiWv5YAgWDiqmBJVDwQymm520JFPxQik0wL6HT6fzyA60WA/MRoSK2AAAAAElFTkSuQmCC'
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
        address: 'G4S6ShMQdqtrWkRfoMrPiLexwTv1QV6SjfrmpUEjtYtvN8d',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADTklEQVRYR8VXW0iTYRh+3tnc3FBoKmEQaELd5KKD0AHdugsLSXIdYIERZd4YGQVB4rwLCrJuUiIadaEdSCj0ppObHT03K0pKjcAu1uZF6pyb++Lf9k/d9v/7d6IP/pt97/c8z/fu/b7veQlxjE16u17GZFUM2EmgfADcxw07A7MT8M5Hvs5PPfk9UmEpVuC2stkCD83XgnAUoA2x4gPzbAwM7XKmbBvsVf8WWyMqQFvuMIHoJIC10ogjoqbA2C2bNdcktF5QgFbntAIoS5A4fFmvzaIpj4YVVYBW57QDyEsROQ/zx2bR8DUTgo4QoNU5JwAUppich5u0WTRFy7FXCNism37AwAxpIvfDEujhR8vqQzxHSECw4JrSSR7CZqyZL0y/AP9Rk7kHkqj2eHVPyX2K7dwR9QtIx+4b6rJQsEaGnjcedD1biBQYzEJAgM75A8D6eLchFF9Xk4XTNcrQ9LVWF8wd8+Hh4zaLpphKyp0VROhKBXlxUQZqDitRuTczBDfnYrh7342bZlcEBWPYRyV6Zysx1CYjICebYDQoYaxWQK1aebLPXprBy9eeqPCM0EYlOkcfgUoTFWCoVMBoUKBwXUYExJDNi+P1f0WgqY8SvXj0u+UwVitRumWVIIHpyhw6u9xie5vkBMwAUEvNQGYm4apJDd0uueiSF70eNDRy0KJjNi4BxYUZeGzOEUV0TvvQ/XwBHZ1u/JrySRIg+e5vvqDCgQqFIGireR6Pnrphd8Qk5jEmJRXhkSoFLp5RhYgXFhiGR70YGvWCO/PcaGlz4U57xFkXzQAD6yetznEdoPpokQf3K3DCqESehvB+wIu+Ya+f+PNXbyg8P1eGy41q/zkfGFn6PVbuA/PsBgV8Xsar8AWN51QY/7mID4NefJ9YFMUr2yH3Xz7nTbPSeINRPlrcE7yKHd+k+73oHLdbstE/4oH1rQdfxsQFB3c/ZrPkbkzbYxQzFcsfo//+HHNq0/EkC2Yh3JDwgSl2wkL8KxxyNFOaDkfMi4lwxkK2XPLtGLPYlgIiHDE3JdiYpNIhhzvh5aJjtGbTTSB2Kgmzmnhrxqtcak7pWBy+cRyM3Uu6OQ3/fzn/CBkqwdjWaO05iIbgw5NRq6Zbam38A4FlSaKdPlLZAAAAAElFTkSuQmCC'
    },
    {
        name: 'DOT',
        address: '14V7aTcYe46SYPwVrjboduoofyBKu3E44rZbYTBdpBMvMrZy',
        icon: 'data:image/png;base64,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'
    },
    {
        name: 'FIL',
        address: 'f1ir7z37hgon6kl2mhg6dpmovozs42rcpvzwwbsqy',
    },
    {
        name: 'XTZ',
        address: 'tz1fkcTAZrhtvToEnWCBoqCzD8zf6ayDotTc',
        icon: 'data:image/png;base64,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'
    }
    */
]
const qrcode = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC/ElEQVRYR+1XsW4TQRB9s+d8B0aiJ38Q09npU1FwaZASgZQq2FWcyoYGJIINFU5Nkwq7i/0BSOYDIkJNQx/fDpo91mx29467KIgmV9m3u7Nv38x7O0fpODsCqIXYw3o02W98io5VfJmOVjsgtR+dTvoHpWN9DmTHsQmTvY15xX1Kp6Xjq/gBoc7XAG5rs6qAc1B3AAoY6AyzNwA/LKaTvk67ycH2K96UOZ8PadkerFIiPClLwbTbeGTHS1PQGazmUHTGWi/9gASVAtyc9hotMw+A/N4eZH0Gmgw9CdYotQnG62k3oRDAaLXjS00CM7g/623M24M/FSz/8424FQNg2OglfXeN3ZBInbsA5L1YwBqRi9oF0BlmbMckwDUAJlWASccg61sAnaFIm430mLWhPQbAvI/lrCoAd+1/AeDXwD9hwGfITYFUvozPeo2Jy4C/RmqidgqI6JsmXAYVzdwCg6QIfQBMvMVEgX0rFnUg9YuwsAYksAI1izStwZdyajcFckoFVeD5eSRRSCjrquZdMs9snjR+iiHVDRdXQcQJmXFqTm0kJtJTa1czUmVeSFpkzPeOMoDFADi3WfswMKkCwPUN8QAxLx+gGzcKoC6N7gbtl9LgAMToWwC1GRBJaYW1AwaAtF6sbVqpLdK4z+C5MGRTILKzAMoOVJQCBuOUEMpQ7gECzaWijScQjvyNwhpYpVB0b/YiCTqvQgBF6F3DsQAImGjmhWXAP7GRK9FWZR+QnLqXiA1oLyOraQvAjDsqqFNDpQyYYiJlZJdLL78NfQA+W78PcDzrbZi5tVVQl4E1W0kjL1wtIGkJpc6mh7QoBSB9e9CQOClw6bQNSYwByxazNie36RHWigCk76760bZcFhBwwEqFLZnWKRjfXRUAWAJ8wcwnCvSACY+R3yVNgOfmw8erkb/3hCWVZF0xVoT26g2W1wFQp4pvOvfuw+QaA5RQ0ChwtqLb+l4s/TjdfZ99YMbTWC4JeP5xLzm5aZ5l3e44e8bA24IYX34BDJvL5H/qFHAAAAAASUVORK5CYII=';
export default function Index() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openMessageAlert, setOpenMessageAlert] = React.useState(false);
    const handleClick = () => {
        setOpenMessageAlert(true);
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenMessageAlert(false);
    };
    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handlePopoverClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const clipboard = new ClipboardJS('.copyBtn');
    clipboard.on('success', function(e) {
        handleClick()
    });
    clipboard.on('error', function(e) {
    });
    return (
        <div>
            <Snackbar
                open={openMessageAlert}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                autoHideDuration={1000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Copy success
                </Alert>
            </Snackbar>
            <p>如果你觉得这个工具帮到你了，</p>
            <List component="nav" aria-label="main mailbox folders">
                {
                    rewardList.map(item=>{
                        return (
                            <ListItem key={item.name}>
                                <Accordion style={{width: '100%'}}>
                                    <AccordionSummary
                                        expandIcon={<img src={qrcode} onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}/>}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <img className="rewardIcon" src={item.icon} alt=""/>
                                        <ListItemText className="rewardAddress" primary={item.address} />
                                        <FileCopyIcon className='copyBtn rewardCopy' data-clipboard-text={item.address} />
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <QRCode
                                            className="qrcode"
                                            value={item.address}
                                            size={100}
                                        />
                                    </AccordionDetails>
                                </Accordion>
                            </ListItem>
                        )
                    })
                }
            </List>
        </div>
    );
}
